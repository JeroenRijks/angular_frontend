import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'tasks', loadChildren: 'src/app/tasks/task.module#TaskModule'},
{path: 'categories', loadChildren: 'src/app/categories/category.module#CategoryModule'},
{path: '', redirectTo: 'tasks', pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
