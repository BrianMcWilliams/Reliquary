import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import * as admin from 'firebase-admin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public auth: AuthService) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: 'https://reliquary-22fc5.firebaseio.com'
    });
  }
}
