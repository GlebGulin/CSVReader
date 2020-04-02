import {Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ExportService {
    // constructor(private http: HttpClient){}
    // getData(){
    //    return this.http.get('https://localhost:44391/csv/show');
    
    // }
    downloadFile(data, filename='data') {
        let xlsData = this.ConvertToXLS(data, ['transactionId','status','type', 'clientName', 'amount']);
        console.log(xlsData)
        let blob = new Blob(['\ufeff' + xlsData], { type: 'text/xls;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".xls");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }
    ConvertToXLS(objArray, headerList) {
         let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
         let str = '';
         let row = 'Id,';
         for (let index in headerList) {
             row += headerList[index] + ',';
         }
         row = row.slice(0, -1);
         str += row + '\r\n';
         for (let i = 0; i < array.length; i++) {
             let line = (i+1)+'';
             for (let index in headerList) {
                let head = headerList[index];
             line += ',' + array[i][head];
             }
             str += line + '\r\n';
         }
         return str;
     }
}
