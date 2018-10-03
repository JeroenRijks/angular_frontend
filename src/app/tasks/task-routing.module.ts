import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'save/:id', component: TaskFormComponent},
  {path: 'save', component: TaskFormComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class TaskRoutingModule { }
