import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebritiesPage } from './celebrities.page';
import { DetailPage } from './detail/detail.page';
import { EditPage } from './edit/edit.page';
import { CreatePage } from './create/create.page';

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
    path: 'create',
    component: CreatePage,
  },
  {
    path: '',
    component: CelebritiesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebritiesPageRoutingModule {}
