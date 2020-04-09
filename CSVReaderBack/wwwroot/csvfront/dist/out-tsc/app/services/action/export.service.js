"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExportService = /** @class */ (function () {
    function ExportService() {
    }
    // constructor(private http: HttpClient){}
    // getData(){
    //    return this.http.get('https://localhost:44391/csv/show');
    // }
    ExportService.prototype.downloadFile = function (data, filename) {
        if (filename === void 0) { filename = 'data'; }
        var xlsData = this.ConvertToXLS(data, ['transactionId', 'status', 'type', 'clientName', 'amount']);
        console.log(xlsData);
        var blob = new Blob(['\ufeff' + xlsData], { type: 'text/xls;charset=utf-8;' });
        var dwldLink = document.createElement("a");
        var url = URL.createObjectURL(blob);
        var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) { //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".xls");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    };
    ExportService.prototype.ConvertToXLS = function (objArray, headerList) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = 'Id,';
        for (var index in headerList) {
            row += headerList[index] + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = (i + 1) + '';
            for (var index in headerList) {
                var head = headerList[index];
                line += ',' + array[i][head];
            }
            str += line + '\r\n';
        }
        return str;
    };
    ExportService = __decorate([
        core_1.Injectable()
    ], ExportService);
    return ExportService;
}());
exports.ExportService = ExportService;
//# sourceMappingURL=export.service.js.map