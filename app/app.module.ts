import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { RegistrationComponent}   from './registration.component'; /**<calling registration component method from registration.component.ts>*/
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [
        FormsModule,
        ReactiveFormsModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
