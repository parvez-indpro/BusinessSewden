import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../models/user';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './app/login/components/login.html'
})

export class LoginComponent implements OnInit {

    public user = new User('', '');
    public errorMsg = '';
    public edited = false;

    constructor(private _service: AuthenticationService) {
    }

    login() {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
            this.edited = true;
        }
    }

    ngOnInit() {

    }

    handleKeyEvent(): void {
        console.log("Enter");
        this.login();
    }

}
