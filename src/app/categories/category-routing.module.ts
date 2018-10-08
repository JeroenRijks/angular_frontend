import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  {path: '', component: CategoryListComponent},
  {path: 'form/:id', component: CategoryFormComponent},
  {path: 'form', component: CategoryFormComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class CategoryRoutingModule { }
