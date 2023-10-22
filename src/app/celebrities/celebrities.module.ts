import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelebritiesPage } from './celebrities.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CelebritiesPageRoutingModule } from './celebrities-routing.module';
import { DetailPage } from './detail/detail.page';
import { EditPage } from './edit/edit.page';
import { ListComponent } from '../shared/components/list.component';
import { ListComponentModule } from '../shared/components/list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CelebritiesPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListComponentModule
  ],
  declarations: [CelebritiesPage, DetailPage, EditPage]
  // declarations: [CelebritiesPage, ListComponent, DetailPage, EditPage]
})
export class CelebritiesPageModule {}
