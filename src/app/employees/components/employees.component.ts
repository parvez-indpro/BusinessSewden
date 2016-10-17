import {Component, OnInit} from "@angular/core";
import {EmployeesService} from "../../employees/services/employees.service";
import {IEmployees} from "../../employees/models/employees";

@Component({
    selector: 'employees',
    templateUrl: './app/employees/components/employees.html',
    styleUrls: ['./app/employees/components/employees.component.css'],
    providers: [EmployeesService]
})

export class EmployeeComponent implements OnInit {
    pageTitle: string = 'Employee List';
    employees: IEmployees[];
    errorMessage: string;

    constructor(private _employeesService: EmployeesService) {
    }

    ngOnInit(): void {
        this._employeesService.getEmployees()
            .subscribe(
                employees => this.employees = employees,
                error => this.errorMessage = <any>error);

    }
}