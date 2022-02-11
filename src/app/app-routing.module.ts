import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { PaisesComponent } from './pages/paises/paises.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: "full" },
  { path: 'paises', component: PaisesComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
