import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { AddValue } from './products/addValue.pipe';
import { ProductFilter } from './products/productFilter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/prodduct.service';



@NgModule({
    // contain all the module
    imports: [
        BrowserModule,
        FormsModule
    ],
    // All the component & pipe
    declarations: [
        AppComponent,
        DashComponent,
        ProductComponent,
        MyUpperPipe,
        AddValue,
        ProductFilter,
        StarComponent
    ],
    // Only first/Main component
    bootstrap: [
        AppComponent
    ],
    // All Services are declare here
    providers: [
        ProductService
    ]
})

export class AppModule {

}
