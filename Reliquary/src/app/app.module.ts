import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MtgIOComponent } from './mtg-io/mtg-io.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonapiComponent } from './pokemonapi/pokemonapi.component';
import { YugiohComponent } from './yugioh/yugioh.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HomeComponent } from './home/home.component';


// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// 2. Add your credentials from step 1
const config = {
  apiKey: "0158da85b3c91e6ac92f72d3d4e70b9fab945b6e",
  authDomain: "reliquary-22fc5.firebaseapp.com",
  databaseURL: "https://reliquary-22fc5.firebaseio.com",
  projectId: "reliquary-22fc5",
  storageBucket: "reliquary-22fc5.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};


@NgModule({
  declarations: [
    AppComponent,
    MtgIOComponent,
    PokemonapiComponent,
    YugiohComponent,
    ImportDataComponent,
    InventoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
