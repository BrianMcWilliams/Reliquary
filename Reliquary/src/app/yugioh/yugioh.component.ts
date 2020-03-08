import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type YuGiOhCard = {
  CardData: string;
  CardImage: ImageData;
}

@Component({
  selector: 'app-yugioh',
  templateUrl: './yugioh.component.html',
  styleUrls: ['./yugioh.component.sass']
}) 
export class YugiohComponent implements OnInit {

  constructor(private http: HttpClient) { }

  // https://db.ygoprodeck.com/api-guide/
  YuGiOhURL = 'https://db.ygoprodeck.com/api/v5/cardinfo.php';

  YuGiOhCards : Array<YuGiOhCard> = new Array<YuGiOhCard>();

  ngOnInit() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*', 
        'Content-Type': 'application/json',
        'Accept' : '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept'
      })
    };
    this.http.get(this.YuGiOhURL + '', httpOptions).
      subscribe( (data: any[]) => {
        debugger;
        data.splice(100, data.length - 100); // For perf reasons, it generates like 10K+ cards
        data.map( (el) => {
          this.YuGiOhCards.push({CardData: el.name, CardImage: el.card_images[0].image_url});
        });
      });
  }

}

