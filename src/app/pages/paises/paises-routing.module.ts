import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './paises.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { FormCiudadesComponent } from './ciudades/form-ciudades/form-ciudades.component';
import { FormProvinciasComponent } from './provincias/form-provincias/form-provincias.component';

const routes: Routes =[
  {
    path:'',
    children:[
      {
        path: 'paises',
        component:PaisesComponent
      }, {
        path: 'provincias',
        component:ProvinciasComponent
      },{
        path: 'provincias/agregar',
        component:FormProvinciasComponent
      },{
        path: 'provincias/editar/:id',
        component:FormProvinciasComponent
      },{
        path: 'ciudades',
        component:CiudadesComponent
      },{
        path: 'ciudades/agregar',
        component:FormCiudadesComponent
      },{
        path: 'ciudades/editar/:id',
        component:FormCiudadesComponent
      },
      {
        path: '**',
        redirectTo: 'paises'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],exports:[
    RouterModule
  ]
})
export class PaisesRoutingModule { }
