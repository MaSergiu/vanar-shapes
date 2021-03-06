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
var SquareComponent = (function () {
    function SquareComponent() {
    }
    SquareComponent.prototype.onCreate = function () {
        alert('OK');
        //jQuery('body').remove();
    };
    SquareComponent = __decorate([
        core_1.Component({
            //selector: 'my-app',
            template: "\n        <div class=\"jumbotron\">\n            <h1>Square</h1>\n            \n            <p><a (click) =\"onCreate()\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Create</a></p>\n            <div class='shape'></div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SquareComponent);
    return SquareComponent;
}());
exports.SquareComponent = SquareComponent;
//# sourceMappingURL=square.component.js.map