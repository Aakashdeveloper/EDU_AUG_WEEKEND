import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './prodduct.service';
import { IProduct } from './product.model';

@Component({
    templateUrl: './productDetail.component.html'
})

export class ProductDetailComponent implements OnInit {
    title: String = 'Product Detail Page';
    id: Number;
    /*name: String;
    image: String;
    description: String;*/
    detail: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService ) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];

        /*this._route
            .queryParams
            .subscribe((params) => {
                this.name = params['name'];
                this.image = params['img'];
                this.description = params['desc'];
            });*/

        this._productService.getProductDetails(this.id)
            .subscribe((data) => this.detail = data);
    }

    onBack(): void {
        this._router.navigate(['products']);
    }
}
