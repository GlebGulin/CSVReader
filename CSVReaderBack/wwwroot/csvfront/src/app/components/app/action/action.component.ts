import { Component, OnInit} from '@angular/core';
import {ExportService} from '../../../services/action/export.service';
import {LoadService} from '../../../services/data/load-data.service';
import {DataModel} from '../../../models/data-model.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'buttons',
    templateUrl: './action.component.html',
    
    styleUrls: ['action.component.css'],
    providers:[ExportService, LoadService]
    
})
export class ActionComponent {
    jsondata: any;
    url = 'https://localhost:44391/csv/show';
    constructor (private exportService:ExportService, private loadService:LoadService, private http: HttpClient){
        this.http.get(this.url).toPromise().then(data => 
            {
                this.jsondata = data['item1'];
                console.log(this.jsondata);
            });
    }

   //Test of json
    // jsondata =  { 
    //     item1:[
    //     {
    //         transactionId: 2,
    //       status: "blaaaaaaaaaaaa",
    //       type: "shdfhgfhdf",
    //       clientName: "szfhxcgjfh",
    //       amount: 40,
    //       other: 80,
    //       fuck: 54757575
          
    //     },
    //     {
    //         transactionId: 4,
    //         status: "fdhdtdfjfhjf",
    //         type: "shdfhgfdfdfhdf",
    //         clientName: "szfhhfhfxcgjfh",
    //         amount: 40,
    //         other: 80,
    //         fuck: 54757575
    //       },
    //       {
    //         transactionId: 8,
    //         status: "fdhjffdgfhjf",
    //         type: "shdfhgfhfdgdfdf",
    //         clientName: "szfhxcdfdgjfh",
    //         amount: 40,
    //         other: 80,
    //         fuck: 54757575
            
    //       }
    //     ]
    //     };
    
    download(){
        this.exportService.downloadFile(this.jsondata, 'download');
      }
}