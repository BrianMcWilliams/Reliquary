import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MtgIOComponent } from './mtg-io/mtg-io.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonapiComponent } from './pokemonapi/pokemonapi.component';
import { YugiohComponent } from './yugioh/yugioh.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import {
	IgxButtonModule,
	IgxIconModule,
	IgxLayoutModule,
	IgxRadioModule,
	IgxRippleModule,
	IgxSwitchModule,
  IgxToggleModule,
  IgxNavigationDrawerModule
 } from 'igniteui-angular';
// 2. Add your credentials from step 1
const firebaseConfig = {
  apiKey: "AIzaSyD1-03ws5P_W0PoPYHuKonjBC25srYsr9A",
  authDomain: "reliquary-22fc5.firebaseapp.com",
  databaseURL: "https://reliquary-22fc5.firebaseio.com",
  projectId: "reliquary-22fc5",
  storageBucket: "reliquary-22fc5.appspot.com",
  messagingSenderId: "669341095451",
  appId: "1:669341095451:web:0a81f1f8eb17ca6d64cabe",
  measurementId: "G-YFBGJST868"
};

// I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    MtgIOComponent,
    PokemonapiComponent,
    YugiohComponent,
    ImportDataComponent,
    InventoryComponent,
    HomeComponent,
    NavDrawerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    IgxNavigationDrawerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule, BrowserAnimationsModule,
    IgxButtonModule,
		IgxIconModule,
		IgxLayoutModule,
		IgxNavigationDrawerModule,
		IgxRadioModule,
		IgxRippleModule,
		IgxSwitchModule,
    IgxToggleModule,
    FormsModule
  ],

    providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
