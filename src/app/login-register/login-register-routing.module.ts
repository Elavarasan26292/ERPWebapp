import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginmainpageComponent } from './loginmainpage/loginmainpage.component'

const routes: Routes = [
  {
    path: 'loginregister',
    component: LoginmainpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
