import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {
  docRef = null;
  inventory = null;

  constructor(
    public auth: AuthService,
    private db: AngularFirestore) {
    this.docRef = db.collection('Cards');
  }

  getInventory() {
    this.docRef.get()
      .subscribe(snapshot => {
        snapshot.forEach(doc => {
          this.inventory = doc.data().json;
        });
      });
  }

  ngOnInit() {
    this.getInventory();
  }

}
