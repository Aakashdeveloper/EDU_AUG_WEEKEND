import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addValue'
})

export class AddValue implements PipeTransform {
    transform(value: number): number {
        if (value < 20) {
            value = value + 10;
        }
        return value;
    }
}
