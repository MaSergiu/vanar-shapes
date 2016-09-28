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
var CircleComponent = (function () {
    function CircleComponent() {
        this.diameter = 100;
        //sozdati lichnie svoistva
        this.shape_code = "\n    <div style=\"background:red;width:100px;height:100px;border-radius:100%\"></div>\n    ";
    }
    //function reacte on click on CREATE
    CircleComponent.prototype.onCreate = function () {
        //alert('OK');
        //document.getElementsByClassName('shape')[0].innerHTML = this.shape_code;
        jQuery('.shape').html(this.shape_code);
        return false;
    };
    CircleComponent = __decorate([
        core_1.Component({
            //selector: 'my-app',
            template: "\n    <div class=\"jumbotron\">\n        <h1>Circle</h1>\n        <p><a (click) =\"onCreate()\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Create</a></p>\n\n        <form>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Diameter in px\" value=\"100px\">\n            </div>\n        </form>\n\n        <div class='shape'></div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CircleComponent);
    return CircleComponent;
}());
exports.CircleComponent = CircleComponent;
//# sourceMappingURL=circle.component.js.map