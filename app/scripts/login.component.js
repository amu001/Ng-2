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
var forms_1 = require('@angular/forms');
var forms_2 = require('@angular/forms');
var loginComponent = (function () {
    function loginComponent(fb) {
        this.loginForm = fb.group({
            email: ["email", forms_2.Validators.required],
            password: ["password", forms_2.Validators.required]
        });
    }
    loginComponent.prototype.doLogin = function (event) {
        console.log(this.loginForm.value);
        event.preventDefault();
    };
    loginComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/views/amita.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            exports: [
                forms_1.FORM_DIRECTIVES,
                forms_1.REACTIVE_FORM_DIRECTIVES
            ],
        }), 
        __metadata('design:paramtypes', [forms_2.FormBuilder])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
//# sourceMappingURL=login.component.js.map