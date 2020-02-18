import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.sass']
})
export class ImportDataComponent implements OnInit {



  selectedFile: File = null;
  // database = admin.database;

  constructor(private db: AngularFirestore) {
    const things = db.collection('things').valueChanges();
    things.subscribe(console.log);
}
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    if (this.selectedFile == null) {
      return;
    }
    // const fd = new FormData();
    // fd.append('csv', this.selectedFile, this.selectedFile.name);


    // this.database.collection('Cards').doc('CardTable').set(fd);
  }
  ngOnInit() {
  }

}
