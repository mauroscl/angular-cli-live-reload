import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Nivel3Module} from './nivel3/nivel3.module';
import { MyNivel2Component } from './my-nivel2/my-nivel2.component';

@NgModule({
  imports: [
    CommonModule,
    Nivel3Module
  ],
  declarations: [MyNivel2Component]
})
export class Nivel2Module { }
