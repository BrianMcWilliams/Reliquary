import { Component, OnInit } from '@angular/core';
import * as admin from 'firebase-admin';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.sass']
})
export class ImportDataComponent implements OnInit {

  selectedFile: File = null;
  database = admin.database;

  constructor() {}
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    if(this.selectedFile == null)
      return;
    
    const fd = new FormData();
    fd.append('csv', this.selectedFile, this.selectedFile.name);

    debugger ;

    //this.database.collection('Cards').doc('CardTable').set(fd);
  }
  ngOnInit() {
  }

}
