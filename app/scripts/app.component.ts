import { Component } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  template: '<a  routerLink="/register">Register</a><router-outlet></router-outlet>',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  exports: [
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES
    ],
})
export class AppComponent {
}