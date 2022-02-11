import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas.component';



@NgModule({
  declarations: [
    EmpresasComponent,
  ],
  imports: [
    CommonModule
  ], exports: [
    EmpresasComponent
  ]
})
export class EmpresasModule { }
