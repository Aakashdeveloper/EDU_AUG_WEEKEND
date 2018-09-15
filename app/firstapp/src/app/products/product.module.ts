import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { AddValue } from './addValue.pipe';
import { ProductFilter } from './productFilter.pipe';
import { ProductDetailComponent } from './productDetail.component';
import { ProductService } from './prodduct.service';
import { SharedModule } from '../shared/shared.module';
import { RouteGaurd } from './product.gaurds';

@NgModule({

    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', canActivate: [RouteGaurd],  component: ProductDetailComponent}
        ]),
        SharedModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        AddValue,
        ProductFilter,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        RouteGaurd
    ]
})

export class ProductModule {

}
