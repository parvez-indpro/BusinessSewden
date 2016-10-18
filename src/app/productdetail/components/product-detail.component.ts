import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';

import {IProduct} from '../../products/models/product';
import {ProductService} from '../../products/services/product.service';
import {StarComponent} from '../../shared/star/components/star.component';

@Component({
    templateUrl: './app/products/product-detail.component.html'

})
export class ProductDetailComponent implements OnInit {
    // pageTitle: string = 'Product Detail';
    // product: IProduct;
    // errorMessage: string;
    //
    // constructor(private _productService: ProductService,
    //             private _router: Router,
    //             private _routeParams: RouteParams) {
    // }

    ngOnInit() {
        // if (!this.product) {
        //     let id = +this._routeParams.get('id');
        //     // this.pageTitle += `: ${id}`;
        //     this.getProduct(id);
        // }
    }

    // getProduct(id: number) {
    //     this._productService.getProduct(id)
    //         .subscribe(
    //             product => this.product = product,
    //             error => this.errorMessage = <any>error);
    // }
    //
    // onBack(): void {
    //     this._router.navigate(['Products']);
    // }

}
