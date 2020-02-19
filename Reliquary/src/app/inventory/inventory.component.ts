import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {
  docRef = null;
  inventory = null;

  constructor(private db: AngularFirestore) {
    this.docRef = db.collection('Cards');
  }

  getInventory() {
    this.docRef.get()
      .subscribe(snapshot => {
        snapshot.forEach(doc => {
          this.inventory = doc.data();
        });
      });
  }

  ngOnInit() {
    this.getInventory();
  }

}
