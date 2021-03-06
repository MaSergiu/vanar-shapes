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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var circle_component_1 = require('./circle.component');
var square_component_1 = require('./square.component');
var triangle_component_1 = require('./triangle.component');
var nav_component_1 = require('./nav.component');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var search_component_1 = require('./search.component');
var language_component_1 = require('./language.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
            declarations: [
                app_component_1.AppComponent, circle_component_1.CircleComponent, triangle_component_1.TriangleComponent, square_component_1.SquareComponent, nav_component_1.NavComponent, search_component_1.SearchComponent, language_component_1.LanguageComponent
            ],
            bootstrap: [app_component_1.AppComponent, nav_component_1.NavComponent, search_component_1.SearchComponent, language_component_1.LanguageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map