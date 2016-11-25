import { Component } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  templateUrl:'/views/successreg.html',
  exports: [
        FORM_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES
    ],
})
export class RegSuccessComponent {
}