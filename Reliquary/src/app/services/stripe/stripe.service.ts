import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { analytics } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class StripeService {
  userId: string;

  constructor(private db: AngularFireDatabase, private afAut: AngularFireAuth) {
    this.afAut.authState.subscribe((auth) => {
      if (auth) this.userId = auth.uid;
    });
  }
    // This will save the token to firebase, triggering the cloud function
    processPayment(token: any, amount) {
      const payment = { token, amount}
      return this.db.list(`/payments/${this.userId}`).push(payment);
    }
  }
