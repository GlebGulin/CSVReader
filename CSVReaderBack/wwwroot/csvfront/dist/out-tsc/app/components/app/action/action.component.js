"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var export_service_1 = require("../../../services/action/export.service");
var load_data_service_1 = require("../../../services/data/load-data.service");
var http_1 = require("@angular/common/http");
var ActionComponent = /** @class */ (function () {
    function ActionComponent(exportService, loadService, http) {
        var _this = this;
        this.exportService = exportService;
        this.loadService = loadService;
        this.http = http;
        this.url = 'https://localhost:44391/csv/show';
        this.http.get(this.url).toPromise().then(function (data) {
            _this.jsondata = data['item1'];
            console.log(_this.jsondata);
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
    ActionComponent.prototype.download = function () {
        this.exportService.downloadFile(this.jsondata, 'download');
    };
    ActionComponent = __decorate([
        core_1.Component({
            selector: 'buttons',
            templateUrl: './action.component.html',
            styleUrls: ['action.component.css'],
            providers: [export_service_1.ExportService, load_data_service_1.LoadService]
        }),
        __metadata("design:paramtypes", [export_service_1.ExportService, load_data_service_1.LoadService, http_1.HttpClient])
    ], ActionComponent);
    return ActionComponent;
}());
exports.ActionComponent = ActionComponent;
//# sourceMappingURL=action.component.js.map