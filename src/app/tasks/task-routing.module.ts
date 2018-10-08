import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'form/:id', component: TaskFormComponent},
  {path: 'form', component: TaskFormComponent}
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
export class TaskRoutingModule { }
