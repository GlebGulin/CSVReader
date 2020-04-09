import { Component, OnInit} from '@angular/core';
import {UploadService} from '../../../../services/action/upload.service';
import {LoadService} from '../../../../services/data/load-data.service';
import {DataModel} from '../../../../models/data-model.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'button-download',
    templateUrl: './upload.component.html',
    
    styleUrls: ['upload.component.css'],
    // providers:[UploadService]
    
})
export class UploadComponent implements OnInit{
    SERVER_URL = "https://localhost:44391/csv/upload";
    uploadForm: FormGroup; 
    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

    ngOnInit() {
        this.uploadForm = this.formBuilder.group({
          profile: ['']
        });
      }
      onFileSelect(event) {
        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          this.uploadForm.get('profile').setValue(file);
          ////////////
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
      
          this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
            (res) => console.log(res),
            (err) => console.log(err)
          );
          //////////////
        }
        ///////////////////////
       
        ////////////////////////
      }
    //   onSubmit() {
    //     const formData = new FormData();
    //     formData.append('file', this.uploadForm.get('profile').value);
    
    //     this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
    //       (res) => console.log(res),
    //       (err) => console.log(err)
    //     );
    //   }
    //////////////////////////////////
    // fileToUpload : any;
    // constructor (private http: HttpClient) {
        
    // }
    // fileToUpload = new FormData();
    // postMethod(files: File) {
    //     this.fileToUpload = files.item(0); 
    //     let formData = new FormData(); 
    //     formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    //     this.http.post("https://localhost:44391/csv/uploadfile", formData).subscribe((val) => {
        
    //     console.log(val);
    //     });
    //     return false; 
    //     }

}