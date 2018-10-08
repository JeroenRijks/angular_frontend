import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
