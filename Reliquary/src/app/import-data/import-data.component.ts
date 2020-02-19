import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as csvtojson from 'csvtojson';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.sass']
})
export class ImportDataComponent implements OnInit {
  selectedFile: Blob = null;
  firebaseDB: AngularFirestore = null;
  reader: FileReader = null;

  constructor(private db: AngularFirestore) {
    this.firebaseDB = db;
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  
  onUpload() {
    if (this.selectedFile == null) {
      return;
    }

    this.reader = new FileReader();
    this.reader.readAsBinaryString(this.selectedFile);

    this.reader.onload = (event: ProgressEvent) => this.onFileRead(event);
  }

  onFileRead(event: ProgressEvent) {
    if(!event.isTrusted || !event.lengthComputable)
      return;
    
    csvtojson()
    .fromString(this.reader.result.toString())
    .then( (json: any[]) => {
      const cards = this.firebaseDB.collection('Cards').doc('CardTable');
      cards.set({json}); //Needs to be an object, just wrapping the array.
    });
  }

  ngOnInit() {
  }

}
