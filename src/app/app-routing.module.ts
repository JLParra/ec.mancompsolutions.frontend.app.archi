import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { CiudadesComponent } from './pages/paises/ciudades/ciudades.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { ProvinciasComponent } from './pages/paises/provincias/provincias.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: "full" },
  { path: 'mundo/paises', component: PaisesComponent },
  { path: 'mundo/provincias', component: ProvinciasComponent },
  { path: 'mundo/ciudades', component: CiudadesComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
