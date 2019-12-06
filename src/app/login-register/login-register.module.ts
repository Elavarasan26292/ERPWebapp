import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotpwdPageComponent } from './forgotpwd-page/forgotpwd-page.component';
import { LoginmainpageComponent } from './loginmainpage/loginmainpage.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [RegisterPageComponent, LoginPageComponent, ForgotpwdPageComponent, LoginmainpageComponent]
})
export class LoginRegisterModule { }
