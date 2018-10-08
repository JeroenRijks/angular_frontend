import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  declarations: [
    TaskListComponent,
    TaskFormComponent
  ]
})
export class TaskModule { }
