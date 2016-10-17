import {Routes, RouterModule} from "@angular/router";
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.component";
import {LoginComponent} from "./login/components/login.component";
import {HomeComponent} from "./home/components/home.component";
import {ProductListComponent} from "./products/components/product-list.component";
import {EmployeeComponent} from "./employees/components/employees.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'tasks', component: TaskListComponent, data: {title: 'TaskList'}},
    {path: 'about', component: AboutComponent, data: {title: 'About'}},
    {path: 'login', component: LoginComponent, data: {title: 'Login'}},
    {path: 'home', component: HomeComponent, data: {title: 'Home'}},
    {path: 'products', component: ProductListComponent, data: {title: 'Product List'}},
    {path: 'employees', component: EmployeeComponent, data: {title: 'Employee List'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
