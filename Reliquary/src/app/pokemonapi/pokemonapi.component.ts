import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


type PokemonCard = {
  CardData: string;
  CardImage: ImageData;
}

@Component({
  selector: 'app-pokemonapi',
  templateUrl: './pokemonapi.component.html',
  styleUrls: ['./pokemonapi.component.sass']
})

export class PokemonapiComponent implements OnInit {

  constructor(private http: HttpClient) { }


  PokemonURL = 'https://api.pokemontcg.io/v1/';

  PokemonCards : Array<PokemonCard> = new Array<PokemonCard>();

  ngOnInit() {
    this.http.get(this.PokemonURL + 'cards').
      subscribe( (data: any) => {
        data.cards.map( (el) => {
          this.PokemonCards.push({CardData: el.name, CardImage: el.imageUrlHiRes});
        });
      });
  }

}
