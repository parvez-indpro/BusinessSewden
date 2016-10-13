"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_1 = require('../models/user');
var users = [
    new user_1.User('admin', 'admin'),
    new user_1.User('user1@gmail.com', 'a23')
];
var AuthenticationService = (function () {
    function AuthenticationService(_router) {
        this._router = _router;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (user) {
        var authenticatedUser = users.find(function (u) { return u.email === user.email; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            this._router.navigate(['home']);
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.checkCredentials = function () {
        var localStorageUser = null;
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['login']);
        }
        else {
            localStorageUser = JSON.parse(localStorage.getItem("user"));
            var authenticatedUser = users.find(function (u) { return u.email === localStorageUser.email; });
            console.log("authenticatedUser", authenticatedUser);
            if (authenticatedUser && authenticatedUser.password === localStorageUser.password) {
                this._router.navigate(['home']);
            }
            else {
                this._router.navigate(['login']);
            }
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable()
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map