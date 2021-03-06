import { Component } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {headerComponent} from './header.component';
@Component({
  selector: 'my-app',
  templateUrl: '/views/amita.html',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  exports: [
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES
    ],
})
export class loginComponent {
	loginForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["email", Validators.required],
      password: ["password", Validators.required]
    });
  }
  doLogin(event) {
    console.log(this.loginForm.value);
    event.preventDefault();
  }  
}