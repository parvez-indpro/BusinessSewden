import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule}    from '@angular/http';

import {AppComponent} from "./app.component";
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.component";
import {TaskComponent} from "./todo/components/task.component";
import {LoginComponent} from "./login/components/login.component";
import {HomeComponent} from "./home/components/home.component";
import {EmployeeComponent} from "./employees/components/employees.component";
import {ProductListComponent} from "./products/components/product-list.component";
import {ProductFilterPipe} from "./products/filters/product-filter.pipe";
import {StarComponent} from "./shared/star/components/star.component";
import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        TaskComponent,
        TaskListComponent,
        AboutComponent,
        LoginComponent,
        HomeComponent,
        ProductListComponent,
        ProductFilterPipe,
        StarComponent,
        EmployeeComponent

    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}