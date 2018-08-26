import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';


@NgModule({
    // contain all the module
    imports: [
        BrowserModule
    ],
    // All the component & pipe
    declarations: [
        AppComponent,
        DashComponent,
        ProductComponent

    ],
    // Only first/Main component
    bootstrap: [
        AppComponent
    ],
    // All Services are declare here
    providers: []
})

export class AppModule {

}
