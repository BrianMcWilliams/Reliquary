import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { analytics } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { DocumentReference } from '@google-cloud/firestore';
import { promise } from 'protractor';
import { Observable, combineLatest } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StripeService {
  userId: string;
  userEmail: string;
  payment: any = null;

  constructor(private db: AngularFirestore, private afAut: AngularFireAuth, private realtimeDB: AngularFireDatabase) {
    this.afAut.authState.subscribe((auth) => {
      if (auth) {
        this.userId = auth.uid;
        this.userEmail = auth.email;
      }
    });

    this.realtimeDB = realtimeDB;
  }
    // This will save the token to firebase, triggering the cloud function
    processPayment(token: any, amount) {
      this.payment = {token: token, amount: amount};

      const baseCustomerPromise = this.db.doc(`stripe_customers/${this.userId}`).get();
      const customerSourcesPromise = this.db.collection(`stripe_customers/${this.userId}/sources`).get();
      
      const promises = new Array<Observable<any>>(baseCustomerPromise, customerSourcesPromise);
      combineLatest(promises).subscribe((results) => {
        
        const baseCustomer = results[0];
        const customerSources = results[1];

        if(!this.payment)
          return;
        if(baseCustomer && baseCustomer.customer_id)
        {
          if(customerSources.size() > 0)
          {
            return this.db.collection(`stripe_customers/${this.userId}/charges/`).add(this.payment);
          }
          else
          {
            //if there is no source, add it      !!!THIS DB FUNCTION ALSO SENDS THE CHARGE!!!        
            return this.db.collection(`stripe_customers/${this.userId}/tokens/`).add(this.payment);
          }
        }
        else
        {
          fetch(`https://us-central1-reliquary-22fc5.cloudfunctions.net/CreateStripeCustomer`, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *client  
              body: JSON.stringify({email: this.userEmail})
            }).then((response) => {
            debugger;

            //if there is no source, add it      !!!THIS DB FUNCTION ALSO SENDS THE CHARGE!!!        
            return this.db.collection(`stripe_customers/${this.userId}/tokens/`).add(this.payment);
          })
        }
      });
    }
  }
