import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { analytics } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { DocumentReference } from '@google-cloud/firestore';
@Injectable({
  providedIn: 'root'
})
export class StripeService {
  userId: string;

  constructor(private db: AngularFirestore, private afAut: AngularFireAuth, private realtimeDB: AngularFireDatabase) {
    this.afAut.authState.subscribe((auth) => {
      if (auth) this.userId = auth.uid;
    });

    this.realtimeDB = realtimeDB;
  }
    // This will save the token to firebase, triggering the cloud function
    async processPayment(token: any, amount) {
      const payment = { token, amount};

      await this.db.collection(`stripe_customers/${this.userId}/tokens/`).add(token);
      return this.db.collection(`stripe_customers/${this.userId}/charges/`).add(payment);
    }
  }
