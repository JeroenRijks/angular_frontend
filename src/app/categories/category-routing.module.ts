import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  {path: '', component: CategoryListComponent},
  {path: 'category/:id', component: CategoryFormComponent},
  {path: 'category', component: CategoryFormComponent}
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
