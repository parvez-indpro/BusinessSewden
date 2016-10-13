import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user';


var users = [
    new User('admin', 'admin'),
    new User('user1@gmail.com', 'a23')
];

@Injectable()
export class AuthenticationService {

    constructor(private _router: Router) {
    }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    }

    login(user) {
        var authenticatedUser = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            this._router.navigate(['home']);
            return true;
        }
        return false;

    }

    checkCredentials() {
        var localStorageUser = null;
        if (localStorage.getItem("user") === null) {
            // console.log("localStorageUser....", localStorageUser);
            this._router.navigate(['login']);
        } else {

            localStorageUser = JSON.parse(localStorage.getItem("user"));
            var authenticatedUser = users.find(u => u.email === localStorageUser.email);
            console.log("authenticatedUser", authenticatedUser);
            if (authenticatedUser && authenticatedUser.password === localStorageUser.password) {
                this._router.navigate(['home']);
            } else {
                this._router.navigate(['login']);
            }
        }
    }
}