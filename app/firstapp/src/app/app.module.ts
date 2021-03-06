import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/notFound.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';



@NgModule({
    // contain all the module
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ]),
        ProductModule
    ],
    // All the component & pipe
    declarations: [
        AppComponent,
        NotFoundComponent,
        OrderComponent,
        HomeComponent
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
