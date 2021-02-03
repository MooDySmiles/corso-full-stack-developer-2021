import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLength'
})
export class StringLengthPipe implements PipeTransform {

  transform(value: string, toUpperCase: boolean = false): string {
    return toUpperCase ? value.toLocaleUpperCase() + '(' + value.length + ')' : value + '(' + value.length + ')';
    /* Traduzione if ternario qui sopra
    if (toUpperCase === true) {
      return value.toLocaleUpperCase() + '(' + value.length + ')';
    } else {
      return value + '(' + value.length + ')';
    }
    */
  }

}
