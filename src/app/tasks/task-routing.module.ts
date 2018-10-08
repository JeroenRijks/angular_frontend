import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'task/:id', component: TaskFormComponent},
  {path: 'task', component: TaskFormComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class TaskRoutingModule { }
