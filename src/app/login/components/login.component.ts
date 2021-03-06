import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../models/user';

@Component({
    providers: [AuthenticationService],
    templateUrl: './app/login/components/login.html',
    styleUrls: ['./app/login/components/login.component.css']
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
        }
    }

    ngOnInit() {

    }

    handleKeyEvent(): void {
        this.login();
    }

    toggleDiv(): void {
        this.edited = !this.edited;
    }

}
