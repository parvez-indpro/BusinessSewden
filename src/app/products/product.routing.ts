import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {ProductListComponent} from './components/product-list.component';
import {ProductDetailComponent} from './components/product-detail.component';
import {ProductDetailGuard} from './services/product-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {
                path: 'product/:id',
                canActivate: [ProductDetailGuard],
                component: ProductDetailComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule {
}