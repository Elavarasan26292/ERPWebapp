import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginmainpage',
  templateUrl: './loginmainpage.component.html',
  styleUrls: ['./loginmainpage.component.scss']
})
export class LoginmainpageComponent implements OnInit {
private flag:any;
  constructor() { }

  ngOnInit() {
    this.flag='login';
  }


  register(){
    if(this.flag=='register'){
      this.flag='login';
    }else if(this.flag=='login'){
      this.flag='register'
    } 
  }

  removeLeaveNote(flag:any){
    this.flag='forgotpwd'
  }
  
}
