import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {AuthenticationService} from '../../login/services/authentication.service';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './app/home/components/home.html'
})

export class HomeComponent implements OnInit {

    constructor(private _service:AuthenticationService) {
    }

    ngOnInit() {
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }


}