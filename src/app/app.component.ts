import {Component, OnInit} from "@angular/core";
import {ProductService} from "./products/services/product.service";


@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ['./app/app.component.css', './app/footer.component.css'],
    providers: [ProductService]
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}