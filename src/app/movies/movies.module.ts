import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesPage } from './movies.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MoviesPageRoutingModule } from './movies-routing.module';
import { ListComponent } from '../shared/components/list.component';
import { DetailPage } from './detail/detail.page';
import { EditPage } from './edit/edit.page';
import { ListComponentModule } from '../shared/components/list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MoviesPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListComponentModule
  ],
  declarations: [MoviesPage, DetailPage, EditPage]
  // declarations: [MoviesPage, ListComponent, DetailPage, EditPage]
})
export class MoviesPageModule {}
