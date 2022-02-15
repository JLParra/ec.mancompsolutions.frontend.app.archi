import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PaisesModule } from './paises/paises.module';
import { EmpresasModule } from './empresas/empresas.module';



@NgModule({
  declarations: [
    DashboardComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule,
    PaisesModule,
    EmpresasModule,

  ], exports: [
    DashboardComponent,
    NopagefoundComponent,
  ]
})
export class PagesModule { }
