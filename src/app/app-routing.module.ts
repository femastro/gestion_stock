import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './shared/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children :[
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
      { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotApsswordModule) },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
