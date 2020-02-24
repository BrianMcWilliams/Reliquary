import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';




interface Card {
  'ASIN': string;
  'Barcode': string;
  'Brand': string;
  'Buy Price': string;
  'Category': string;
  'Description': string;
  'Domestic Only': string;
  'MSRP': string;
  'Manufacturer SKU': string;
  'Max Qty': string;
  'Product Name': string;
  'Sell Price': string;
  'Tax Exempt': string;
  'Total Qty': string;
  'URL': string;
  'Weight': string;
  'Wishlists': string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})

export class InventoryComponent  {
  docRef = null;
  inventory: Card[] = null;

  constructor(
    public auth: AuthService,
    private db: AngularFirestore) {
    this.docRef = db.collection('Cards');
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
          this.inventory = doc.data().json;
        });
      });
  }





// ASIN: "B075NVLDBN"
// Barcode: ""
// Brand: ""
// Buy Price: "0.00"
// Category: "Ixalan"
// Description: ""
// Domestic Only: ""
// MSRP: "0.00"
// Manufacturer SKU: ""
// Max Qty: "4"
// Product Name: "Arcane Adaptation"
// Sell Price: "1.99"
// Tax Exempt: "false"
// Total Qty: "2"
// URL: "http://expeditionjeux.com/catalog/cartes_individuelles_magic-ixalan_block-ixalan/arcane_adaptation/1534033"
// Weight: "0.005"
// Wishlists: "0"

}
