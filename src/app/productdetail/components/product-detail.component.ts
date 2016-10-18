import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {IProduct} from '../../products/models/product';
import {ProductService} from '../../products/services/product.service';

@Component({
    selector: 'product-delail',
    templateUrl: './app/productdetail/components/product-detail.html'

})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';

    constructor(private _productService: ProductService,
                private _route: ActivatedRoute,
                private _router: Router) {
    }


    product: IProduct;
    errorMessage: string;

    ngOnInit() {

        if (!this.product) {
            this._route.params.forEach((params: Params) => {
                let id = +params['id'];
                this.getProduct(id);
            });

        }
    }

    getProduct(id: number) {
        // this._productService.getProduct(id)
        //     .subscribe(
        //         product => this.product = product,
        //         error => this.errorMessage = <any>error);


        this._productService.getProduct(1)
            .subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }

}
