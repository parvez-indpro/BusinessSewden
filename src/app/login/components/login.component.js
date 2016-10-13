"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var authentication_service_1 = require('../services/authentication.service');
var user_1 = require('../models/user');
var LoginComponent = (function () {
    function LoginComponent(_service) {
        this._service = _service;
        this.user = new user_1.User('', '');
        this.errorMsg = '';
        this.edited = false;
    }
    LoginComponent.prototype.login = function () {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
            this.edited = true;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            providers: [authentication_service_1.AuthenticationService],
            templateUrl: './app/login/components/login.html'
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map