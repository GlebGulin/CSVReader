"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app/app.component");
var data_list_component_1 = require("./components/data/dataList/data-list.component");
var status_component_1 = require("./components/data/status/status.component");
var type_component_1 = require("./components/data/type/type.component");
var http_1 = require("@angular/common/http");
var forms_2 = require("@angular/forms");
// import {SharedModule} from './modules/shared.module';
// import {NgClassComponent} from './directivescomponent/ngclass.component';
// import { ChangestyleComponent } from './directivescomponent/changestyle.component';
// import {Changes} from  './directivescomponent/changestyles.component';
// import {BoldDirective} from './atributedirective/bold.directive';
// import {MyWhileDirective} from './StructureDirective/structure.directive';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule, forms_2.ReactiveFormsModule],
            // imports: [BrowserModule],
            declarations: [app_component_1.AppComponent, data_list_component_1.DataListComponent, status_component_1.StatusSelectComponent, type_component_1.TypeSelectComponent],
            // declarations: [ AppComponent ],
            bootstrap: [app_component_1.AppComponent]
            // exports: [
            //     SharedModule
            // ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map