import { Component } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: 'amita.html',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class AppComponent {
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