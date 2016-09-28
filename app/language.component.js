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
var LanguageComponent = (function () {
    function LanguageComponent() {
        this.languageCodes = ['Romanian', 'English', 'Russian'];
    }
    LanguageComponent.prototype.onChange = function () {
    };
    LanguageComponent = __decorate([
        core_1.Component({
            selector: '.language',
            template: "\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\" (click)=\"onChange()\" >Ro<span class=\"sr-only\">(current)</span></a></li>\n            <li><a href=\"#\" (click)=\"onChange()\" >En</a></li>\n            <li><a href=\"#\" (click)=\"onChange()\" >Ru</a></li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LanguageComponent);
    return LanguageComponent;
}());
exports.LanguageComponent = LanguageComponent;
//# sourceMappingURL=language.component.js.map