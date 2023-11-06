import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInt'
})
export class ToIntPipe implements PipeTransform {

  transform(value: number, fixValue: number): number {
    return Number((value * 10).toFixed(fixValue));
  }

}
