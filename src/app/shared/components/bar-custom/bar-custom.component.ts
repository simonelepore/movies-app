import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-custom',
  templateUrl: './bar-custom.component.html',
  styleUrls: ['./bar-custom.component.scss'],
})
export class BarCustomComponent {

  @Input() rating = 0;
  barColor = "";

  private _divideByTen(rating: number) {
    if (rating < 1) {
      return rating;
    } else {
      return this.rating /= 10;
    }
  }

  ngOnChanges() {
    this._divideByTen(this.rating);
    if (this.rating <= 0.4) {
      this.barColor = "danger";
    } else if (this.rating <= 0.8) {
      this.barColor = "warning";
    } else {
      this.barColor = "primary";
    }
  }

}
