import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeworkComponent } from './homework/homework.component';
import { Homework03Component } from './homework03/homework03.component';
import { TableComponent } from './homework03/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeworkComponent,
    Homework03Component,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }