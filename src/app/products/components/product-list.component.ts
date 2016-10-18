import {Component, OnInit} from "@angular/core";
import {IProduct} from "../models/product";
import {ProductService} from "../services/product.service";
import {Router, ActivatedRoute, Params} from '@angular/router';

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

    constructor(private _productService: ProductService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);

    }

    onSelect(product: IProduct) {
        console.log(1);
        // this.router.navigate(['productdetail', product.productId]);
        this.router.navigate(['productdetail']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}