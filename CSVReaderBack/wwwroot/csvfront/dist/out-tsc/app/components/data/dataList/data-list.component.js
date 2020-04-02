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
var load_data_service_1 = require("../../../services/data/load-data.service");
var DataListComponent = /** @class */ (function () {
    function DataListComponent(http) {
        this.http = http;
        this.dataModel = [];
    }
    DataListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getData().subscribe(function (data) { return _this.dataModel = data["item1"]; });
    };
    DataListComponent = __decorate([
        core_1.Component({
            selector: 'data-list',
            templateUrl: './data-list.component.html',
            styleUrls: ['./data-list.component.css'],
            providers: [load_data_service_1.LoadService]
        }),
        __metadata("design:paramtypes", [load_data_service_1.LoadService])
    ], DataListComponent);
    return DataListComponent;
}());
exports.DataListComponent = DataListComponent;
//# sourceMappingURL=data-list.component.js.map