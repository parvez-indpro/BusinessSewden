import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {IEmployees} from '../models/employees';

@Injectable()
export class EmployeesService {
    private _employeesUrl = 'api/employees/employees.json';


    constructor(private _http: Http) {
    }

    getEmployees(): Observable<IEmployees[]> {
        return this._http.get(this._employeesUrl)
            .map((response: Response) => <IEmployees[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
