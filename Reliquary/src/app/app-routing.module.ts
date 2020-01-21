import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtgIOComponent } from './mtg-io/mtg-io.component';
import { PokemonapiComponent } from './pokemonapi/pokemonapi.component'
const routes: Routes = [
  { path: 'mtgio', component: MtgIOComponent },
  { path: 'pokemon', component: PokemonapiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
