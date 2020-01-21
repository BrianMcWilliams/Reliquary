import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mtg-io',
  templateUrl: './mtg-io.component.html',
  styleUrls: ['./mtg-io.component.sass']
})
export class MtgIOComponent implements OnInit {

  constructor(private http: HttpClient) { }

  // https://scryfall.com/docs/api/cards/random
  ScryfallURL = 'https://api.scryfall.com/';

  CardData :string = null;
  CardImage : ImageData = null;

  ngOnInit() {
    this.http.get(this.ScryfallURL + '/cards/random').
      subscribe( (data: any) => {
        this.CardData = data.name;
        this.CardImage = data.image_uris.large;
      });
  }
}


