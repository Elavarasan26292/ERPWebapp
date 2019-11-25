import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
// import { RegisterPageComponent } from './register-page/register-page.component';
// import { LoginPageComponent } from './login-page/login-page.component';
// import { ForgotpwdPageComponent } from './forgotpwd-page/forgotpwd-page.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRegisterRoutingModule
  ],
  declarations: [
    // RegisterPageComponent, LoginPageComponent, ForgotpwdPageComponent
  ]
})
export class LoginRegisterModule { }
