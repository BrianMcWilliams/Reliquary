/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const logging: any = require('@google-cloud/logging')
admin.initializeApp();
const stripe = require('stripe')(functions.config().stripe.secret);
const currency = functions.config().stripe.currency || 'USD';

// [START chargecustomer]
// Charge the Stripe customer whenever an amount is created in Cloud Firestore
exports.createStripeCharge = functions.firestore.document('stripe_customers/{userId}/charges/{id}').onCreate(async (snap: any, context: any) => {
      console.log("Creating charge");
      const val = snap.data();

      try {
        // Look up the Stripe customer id written in createStripeCustomer
        const snapshot = await admin.firestore().collection(`stripe_customers`).doc(`${context.params.userId}`).get();
        const snapval = snapshot.data();
        const customer = snapval?.customer_id

        console.log("Found customer ", customer);
        // Create a charge using the pushId as the idempotency key
        // protecting against double charges
        const amount = val.amount;
        const idempotencyKey = context.params.id;
        const charge: any = {amount, currency, customer};
        if (val.source !== null) {
          charge.source = val.source;
        }

        console.log("Charging : ", charge);

        const response = await stripe.charges.create(charge, {idempotencyKey: idempotencyKey});
        

        const log = new logging.Entry("Response " + response);
        log.write();
        console.log("Response : ", response);

        // If the result is successful, write it back to the database
        return snap.ref.set(response, { merge: true });
      } catch(error) {
        // We want to capture errors and render them in a user-friendly way, while
        // still logging an exception with StackDriver
        console.log(error);
        await snap.ref.set({error: userFacingMessage(error)}, { merge: true });
        reportError(error, {user: context.params.userId}).catch((e) => console.log(e));;
        return;
      }
    });
// [END chargecustomer]]

// When a user is created, register them with Stripe
exports.createStripeCustomer = functions.auth.user().onCreate(async (user: any) => {
  try {
    const customer = await stripe.customers.create({email: user.email});
    return admin.firestore().collection('stripe_customers').doc(user.uid).set({customer_id: customer.id});
  }
  catch(err)
  {
    reportError(err).catch(err => console.log(err));
    return;
  }
});



exports.GetStripeCustomer = functions.https.onRequest(async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    return res.status(204).send('');
  } else {
    if(req.body.customerId){
      const response = await stripe.customers.retrieve(req.body.customerId);
      console.log("Response from stripe", response);

      return res.status(200).send({message: response});
    }
    else {
        return res.status(401).send({message: "Request needs customerId attribute, find it in the stripe_customers DB"});
      }
    }
  }
  catch (e)
  {
    console.log(e);
    return res.status(401).send(e);
  }
});

exports.CreateStripeCustomer = functions.https.onRequest(async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    return res.status(204).send('');
  } else {
    if(req.body.email){
      
      const response = await stripe.customers.create({email: req.body.email});
      console.log("Response from stripe", response);

      return res.status(200).send({message: response});
    }
    else {
        return res.status(401).send({message: "Request needs email attribute, find it in the users DB"});
      }
    }
  }
  catch (e)
  {
    console.log(e);
    return res.status(401).send(e);
  }
});






// Add a payment source (card) for a user by writing a stripe payment source token to Cloud Firestore
exports.addPaymentSource = functions.firestore.document('stripe_customers/{userId}/tokens/{id}').onCreate(async (snap: any, context: any) => {
  console.log("Start adding payment source");
  const source = snap.data().token;
  console.log("snapshot is snap.data", snap.data());
  console.log("source is snap.data().token =>:", source);
  const token = source.id;

  console.log("Token is :", token);
  if (source === null){
    return null;
  }

  try {
    const snapshot = await admin.firestore().collection('stripe_customers').doc(`${context.params.userId}`).get();
    const customer =  snapshot.data()?.customer_id;
    const response = await stripe.customers.createSource(customer, {source: token});

    console.log(response);
    await admin.firestore().collection('stripe_customers').doc(`${context.params.userId}`).collection("sources").doc(`${response.fingerprint}`).set(response, {merge: true});
    return admin.firestore().collection(`stripe_customers/${context.params.userId}/charges/`).add(source.payment);
  } catch (error) {
    await snap.ref.set({'error':userFacingMessage(error)},{merge:true});
    reportError(error, {user: context.params.userId}).catch((e) => console.log(e));
    return;
  }
});

// When a user deletes their account, clean up after them
exports.cleanupUser = functions.auth.user().onDelete(async (user: any) => {
  const snapshot = await admin.firestore().collection('stripe_customers').doc(user.uid).get();
  const customer = snapshot.data();
  await stripe.customers.del(customer?.customer_id);
  return admin.firestore().collection('stripe_customers').doc(user.uid).delete();
});

// To keep on top of errors, we should raise a verbose error report with Stackdriver rather
// than simply relying on console.error. This will calculate users affected + send you email
// alerts, if you've opted into receiving them.
// [START reporterror]
function reportError(err: any, context = {}) {
  // This is the name of the StackDriver log stream that will receive the log
  // entry. This name can be any valid log stream name, but must contain "err"
  // in order for the error to be picked up by StackDriver Error Reporting.
  const logName = 'errors';
  const log = new logging.Entry(logName);

  // https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/MonitoredResource
  const metadata = {
    resource: {
      type: 'cloud_function',
      labels: {function_name: process.env.FUNCTION_NAME},
    },
  };

  // https://cloud.google.com/error-reporting/reference/rest/v1beta1/ErrorEvent
  const errorEvent = {
    message: err.stack,
    serviceContext: {
      service: process.env.FUNCTION_NAME,
      resourceType: 'cloud_function',
    },
    context: context,
  };

  // Write the error log entry
  return new Promise((resolve, reject) => {
    log.write(log(metadata, errorEvent), (error: any) => {
      if (error) {
       reject(error);
       return;
      }
      resolve();
      return;
    });
  });
}
// [END reporterror]

// Sanitize the error message for the user
function userFacingMessage(error: any) {
  return error.type ? error.message : 'An error occurred, developers have been alerted';
}
