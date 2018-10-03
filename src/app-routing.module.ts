import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'task', loadChildren: 'src/app/tasks/task.module#TaskModule'},
{path: 'category', loadChildren: 'src/app/categories/category.module#CategoryModule'},
{path: '', redirectTo: 'task', pathMatch: 'full'}
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
