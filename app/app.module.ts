import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';

import { loginComponent }   from './login.component';
import { RegistrationComponent}   from './registration.component';

const appRoutes: Routes = [
{ path: 'login', component: loginComponent },
  { path: 'register', component: RegistrationComponent },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)
],
  exports: [
        FormsModule,
        ReactiveFormsModule
    ],
  declarations: [ AppComponent,RegistrationComponent,loginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
