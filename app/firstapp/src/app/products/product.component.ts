import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './prodduct.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:red}', 'h3{color:olive}']
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

    title: String = '********Products Page********';
    showImage: Boolean =  false;
    filterProduct: String;
    imageWidth: Number = 50;
    products: IProduct[];

    constructor(private _productService: ProductService) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    onDataRecieve(message: string): void {
        this.title = '********Products Page********>>>> ' + message;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }
}



/*

One way binding
--Data Binding{{}}
--Property Binding[]
--Event Binding()

Two way binding[()]

function add(a,b){
    return a+b
}

var add = (a,b) => {return a+b}

The way in which we will recive the data/instance from extrenal source
rather than creating itself
*/
