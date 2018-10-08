import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { DynamicListComponent } from './dynamic-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    RouterModule
  ],
  declarations: [
    DynamicListComponent
  ],
  exports: [
    DynamicListComponent
  ]
})
export class DynamicListModule { }
