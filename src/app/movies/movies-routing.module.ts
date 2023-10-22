import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPage } from './movies.page';
import { DetailPage } from './detail/detail.page';
import { EditPage } from './edit/edit.page';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailPage,
  },
  {
    path: 'edit/:id',
    component: EditPage,
  },
  {
    path: '',
    component: MoviesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesPageRoutingModule {}
