import {Component, OnInit} from "@angular/core";
import {IProduct} from "../models/product";
import {ProductService} from "../services/product.service";


@Component({
    selector: 'pm-products',
    templateUrl: './app/products/components/product-list.html',
    styleUrls: ['./app/products/components/product-list.component.css'],
    providers:[ProductService]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[];
    private _productService;
    listFilter: string;
    constructor(private _productService: ProductService){

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}