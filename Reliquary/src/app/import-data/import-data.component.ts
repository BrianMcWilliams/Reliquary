import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.sass']
})
export class ImportDataComponent implements OnInit {

  selectedFile: File = null;

  constructor(private http: HttpClient) {}
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    // const fd = new FormData();
    // fd.append('csv', this.selectedFile, this.selectedFile.name);
    // this.http.post('', fd, {
    //   reportProgress: true,
    //   observe: 'events',
    // })
    // .subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress) {
    //     console.log('Upload progress: ' + Math.round(event.loaded / event.total * 100) + '%');
    //   } else if (event.type === HttpEventType.Response) {
    //     console.log(event);
    //   }
    // });
  }
  ngOnInit() {
  }

}
