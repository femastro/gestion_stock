import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
      { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotApsswordModule) },
      { path: 'stock', loadChildren: () => import('./pages/stock/stock.module').then(m => m.StockModule) },
      { path: 'entradas', loadChildren: () => import('./pages/entradas/entradas.module').then(m => m.EntradasModule) },
      { path: 'salidas', loadChildren: () => import('./pages/salidas/salidas.module').then(m => m.SalidasModule) },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
