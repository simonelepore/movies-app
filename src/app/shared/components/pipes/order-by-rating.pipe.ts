import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../interfaces/itemlist.interface';

@Pipe({
  name: 'orderByRating'
})
export class OrderByRatingPipe implements PipeTransform {

  transform(value: Item[], order: 'asc' | 'desc' = 'asc'): Item[] {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return (a.rating || 0) - (b.rating || 0);
      } else if (order === 'desc') {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0;
    });
  }

}
