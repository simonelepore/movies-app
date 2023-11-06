import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarCustomComponent } from './bar-custom.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [BarCustomComponent],
  exports: [BarCustomComponent]
})
export class BarCustomModule { }
