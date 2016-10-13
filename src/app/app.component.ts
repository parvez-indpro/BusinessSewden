import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ['./app/app.component.css', './app/footer.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}