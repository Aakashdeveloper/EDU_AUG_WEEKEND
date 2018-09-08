import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'mySearch'
})

export class ProductFilter implements PipeTransform {
    transform(value: any[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((product: IProduct) =>
            product.productName.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}

/*
var ages = [32, 33, 16, 40];

var checkAdult = (age) => { return  age >= 18 }

ages.filter((age) => { return  age >= 18 });
}*/
