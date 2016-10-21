import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ProductRoutingModule} from './product.routing';
import {ProductListComponent} from './components/product-list.component';
import {ProductDetailComponent} from './components/product-detail.component';
import {ProductDetailGuard} from './services/product-guard.service';
import {ProductFilterPipe} from './filters/product-filter.pipe';
import {ProductService} from './services/product.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {
}
