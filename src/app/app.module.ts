import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Nivel2Module } from './nivel2/nivel2.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Nivel2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
