import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RegisterPageComponent } from './register-page/register-page.component';
// import { LoginPageComponent } from './login-page/login-page.component';
// import { ForgotpwdPageComponent } from './forgotpwd-page/forgotpwd-page.component';

const routes: Routes = [
  // {
  //   path: 'register',
  //   component: RegisterPageComponent
  // }, {
  //   path: 'login',
  //   component: LoginPageComponent
  // },
  // {
  //   path: 'forgotpwd',
  //   component: ForgotpwdPageComponent
  // }
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'startup', loadChildren: './login-page/login-page.module#LoginPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
