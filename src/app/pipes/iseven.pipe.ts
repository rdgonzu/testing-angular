import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'isEven'
})

export class isEvenPipe implements PipeTransform {

    transform(value: any) {

        if (value % 2 == 0) {
            return 'Even';
        }

        return 'Odd';
        
    }

}