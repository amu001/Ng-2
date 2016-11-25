import { Component } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {headerComponent} from './header.component';
@Component({
  selector: 'my-app',
  templateUrl: '/views/registration.html',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  declarations: [ headerComponent ]
})
export class RegistrationComponent {
	RegForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.RegForm = fb.group({
      email: ["email", Validators.required],
      password: ["password", Validators.required]
    });
  }
  doReg(event) {
    console.log(event);
    event.preventDefault();
  }  
}