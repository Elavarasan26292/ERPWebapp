import { Component, OnInit,NgModule } from '@angular/core';
import {  FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      address1: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required]
  });
  }

  get formInput() { 
    return this.registerForm.controls; 
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert("in valid")
  }else{
    alert("valid")
  }
  }
}
