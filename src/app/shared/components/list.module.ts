import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListComponent } from './list.component';
import { OrderByRatingPipe } from './pipes/order-by-rating.pipe';
import { ToIntPipe } from './pipes/to-int.pipe';
import { MarroDirective } from './directives/marro.directive';
import { BarCustomModule } from './bar-custom/bar-custom.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, BarCustomModule],
  declarations: [ListComponent, OrderByRatingPipe, ToIntPipe, MarroDirective],
  exports: [ListComponent]
})
export class ListComponentModule {}
