import {Pipe, PipeTransform } from '@angular/core' ;

@Pipe({
    name: 'myUpper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, kindof: string): string {
        if (kindof === 'Upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}

