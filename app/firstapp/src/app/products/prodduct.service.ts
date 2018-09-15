import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
// Ang5 ==> import { Observable } from 'rxjs/observeble;
import { Observable } from 'rxjs';
// Ang5 ==>  import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';

@Injectable()

export class ProductService {
    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: Http,
                private __http: HttpClient) {}

    private extractData(res: Response) {
        return res.json();
    }
    getProducts(): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(this._productUrl);
    }

    getProductDetails(id): Observable<IProduct[]> {
        console.log('>>>>>id' + id);
        return this.__http.get<IProduct[]>(`${this._productUrl}?productId=${id}` );
    }
}

  // http Client
    /*getProducts(): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(this._productUrl);
    }*/

// Ang6
/*getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
            .pipe(map(this.extractData));
}
*/

// Ang5
/* getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
            .map((response: Response) => response.json());
} */


/*
promise
 getProducts(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
            .toPromise()
            .then(res => res.json());
    }
    */



/*
http
httpclient

observable=> Stream Line        <== Subscribe
promisses==> Wait for final response


var a =20

var b = "my age is "+a;
var b = `my age is ${a}`
*/
