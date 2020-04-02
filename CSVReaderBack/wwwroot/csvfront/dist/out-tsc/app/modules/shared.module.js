"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_list_component_1 = require("../components/data/dataList/data-list.component");
var status_component_1 = require("../components/data/status/status.component");
var type_component_1 = require("../components/data/type/type.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
// import {
//     MatFormFieldModule,
//     MatInputModule,
//     MatNativeDateModule,
//     MatIconModule,
//     MatDatepickerModule,
//     MatCheckboxModule,
//     MatSelectModule,
//     MatListModule,
//     MatDialogModule
// } from '@angular/material';
// import { NgxSpinnerModule } from '@hardpool/ngx-spinner';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                data_list_component_1.DataListComponent,
                status_component_1.StatusSelectComponent,
                type_component_1.TypeSelectComponent
            ],
            exports: [
                data_list_component_1.DataListComponent,
                status_component_1.StatusSelectComponent,
                type_component_1.TypeSelectComponent
            ],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map