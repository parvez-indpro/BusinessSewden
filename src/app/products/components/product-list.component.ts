import {Component, OnInit} from "@angular/core";
import {IProduct} from "../models/product";
import {ProductService} from "../services/product.service";
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'pm-products',
    templateUrl: './app/products/components/product-list.html',
    styleUrls: ['./app/products/components/product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[];
    listFilter: string;
    errorMessage: string;

    constructor(private _productService: ProductService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error =>  this.errorMessage = <any>error);

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}