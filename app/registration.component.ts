import { Component } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: 'registration.html',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
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