import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MtgIOComponent } from './mtg-io/mtg-io.component';
import { PokemonapiComponent } from './pokemonapi/pokemonapi.component';
import { YugiohComponent } from './yugioh/yugioh.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mtgio', component: MtgIOComponent },
  { path: 'pokemon', component: PokemonapiComponent },
  { path: 'yugioh', component: YugiohComponent },
  { path: 'import', component: ImportDataComponent},
  { path: 'inventory', component: InventoryComponent },
  { path: 'navDrawer', component: NavDrawerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
