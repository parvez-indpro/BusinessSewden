import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.component";
import {LoginComponent} from "./login/components/login.component";
import {EmployeeComponent} from "./employees/components/employees.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'employees', component: EmployeeComponent, data: {title: 'Employee List'}},
            {path: 'tasks', component: TaskListComponent, data: {title: 'TaskList'}},
            {path: 'about', component: AboutComponent, data: {title: 'About'}},
            {path: 'login', component: LoginComponent, data: {title: 'Login'}},
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: '**', redirectTo: 'login', pathMatch: 'full'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}