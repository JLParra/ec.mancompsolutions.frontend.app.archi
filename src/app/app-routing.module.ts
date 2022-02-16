import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    pathMatch: "full"
  },

  {
    path: 'mundo',
    loadChildren: () => import('./pages/paises/paises.module').then(m => m.PaisesModule)

  },
  { path: 'empresas', component: EmpresasComponent, pathMatch: "full" },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
