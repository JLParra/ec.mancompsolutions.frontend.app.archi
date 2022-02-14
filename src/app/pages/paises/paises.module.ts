import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesComponent } from './paises.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { FormCiudadesComponent } from './ciudades/form-ciudades/form-ciudades.component';
import { FormPaisesComponent } from './form-paises/form-paises.component';
import { FormProvinciasComponent } from './provincias/form-provincias/form-provincias.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaisesComponent,
    ProvinciasComponent,
    CiudadesComponent,
    FormCiudadesComponent,
    FormPaisesComponent,
    FormProvinciasComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    PaisesComponent,
    ProvinciasComponent,
    CiudadesComponent
  ]
})
export class PaisesModule { }
