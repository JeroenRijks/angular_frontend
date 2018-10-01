import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'task', loadChildren: 'src/app/tasks/tasks.module#TasksModule'},
{path: 'category', loadChildren: 'src/app/categories/categories.module#CategoriesModule'},
{path: '', redirectTo: 'task/tasks', pathMatch: 'full'}
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
