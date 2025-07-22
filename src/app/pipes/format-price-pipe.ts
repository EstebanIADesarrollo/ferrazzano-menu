import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice',
  standalone: true
})
export class FormatPricePipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || isNaN(value)) {
      return '';
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

}
