import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.component";
import {TaskComponent} from "./todo/components/task.component";
import {LoginComponent} from "./login/components/login.component";
import {HomeComponent} from "./home/components/home.component";
import {EmployeeComponent} from "./employees/components/employees.component";
import {ProductModule} from "./products/product.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TaskComponent,
        TaskListComponent,
        AboutComponent,
        LoginComponent,
        HomeComponent,
        EmployeeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}