import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesComponent } from './paises.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { FormCiudadesComponent } from './ciudades/form-ciudades/form-ciudades.component';
import { FormPaisesComponent } from './form-paises/form-paises.component';
import { FormProvinciasComponent } from './provincias/form-provincias/form-provincias.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './Components/input/input.component';
import { TableComponent } from './Components/table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PaisesComponent,
    ProvinciasComponent,
    CiudadesComponent,
    FormCiudadesComponent,
    FormPaisesComponent,
    FormProvinciasComponent,
    TableComponent,
    InputComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    PaisesComponent,
    ProvinciasComponent,
    CiudadesComponent,
    TableComponent,
  ]
})
export class PaisesModule { }
