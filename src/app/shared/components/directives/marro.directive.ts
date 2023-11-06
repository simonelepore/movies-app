import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[checkRating]'
})
export class MarroDirective {

  constructor(private _el: ElementRef<HTMLLabelElement>) {}

  @Input() set checkRating(rating: number) {
    if(rating<= this.minRating) {
      this._el.nativeElement.style.color = 'brown';
    } else {
      this._el.nativeElement.style.color = 'inherit'
    }
  }

  @Input() minRating=0;

}
