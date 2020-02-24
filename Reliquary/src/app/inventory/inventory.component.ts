import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Card} from '../types/basecard.type';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})

export class InventoryComponent implements OnInit {
  docRef = null;
  inventory: Card[] = null;

  constructor(
    public auth: AuthService,
    private db: AngularFirestore) {
    this.docRef = db.collection('Cards');
  }

  ngOnInit()
  {
    this.getInventory();
  }
  
  displayedColumns: string[] = [
    'ASIN', 'Barcode', 'Brand', 'Buy Price', 'Category', 'Description',
    'Domestic Only', 'MSRP', 'Manufacturer SKU', 'Max Qty', 'Product Name',
    'Sell Price', 'Tax Exempt', 'Total Qty', 'URL', 'Weight', 'Wishlists'
  ];

  getInventory() {
    this.docRef.get()
      .subscribe(snapshot => {
        snapshot.forEach(doc => {
          debugger;
          this.inventory = doc.data().json as Card[];
        });
      });
  }
}
