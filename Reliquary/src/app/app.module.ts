import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MtgIOComponent } from './mtg-io/mtg-io.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonapiComponent } from './pokemonapi/pokemonapi.component';
import { YugiohComponent } from './yugioh/yugioh.component';
import { ImportDataComponent } from './import-data/import-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MtgIOComponent,
    PokemonapiComponent,
    YugiohComponent,
    ImportDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
