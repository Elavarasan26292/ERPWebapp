import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Output() private passFlag = new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit() {
  }

  showfpage(){
    this.passFlag.emit(true);
  }

}
