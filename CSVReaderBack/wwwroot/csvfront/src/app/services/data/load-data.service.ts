import {Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class LoadService {
    constructor(private http: HttpClient){}
    getData(){
       return this.http.get('https://localhost:44391/csv/show');
    // return this.http.get('datamodel.json');
    }
}