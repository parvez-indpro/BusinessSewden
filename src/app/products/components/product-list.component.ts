import {Component, OnInit} from "@angular/core";

@Component({
    templateUrl: './app/products/components/product-list.html',
    styleUrls: ['./app/products/components/product-list.component.css'],

})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';

    ngOnInit(): void {

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}