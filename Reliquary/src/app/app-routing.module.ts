import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtgIOComponent } from './mtg-io/mtg-io.component';
import { PokemonapiComponent } from './pokemonapi/pokemonapi.component';
import { YugiohComponent } from './yugioh/yugioh.component';
import { ImportDataComponent } from './import-data/import-data.component';


const routes: Routes = [
  { path: 'mtgio', component: MtgIOComponent },
  { path: 'pokemon', component: PokemonapiComponent },
  { path: 'yugioh', component: YugiohComponent },
  { path: 'import', component: ImportDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
