import { Component, OnInit} from '@angular/core';
import {ExportService} from '../../../../services/action/export.service';
import {LoadService} from '../../../../services/data/load-data.service';
import {DataModel} from '../../../../models/data-model.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

   
    download(){
        this.exportService.downloadFile(this.jsondata, 'download');
      }
}