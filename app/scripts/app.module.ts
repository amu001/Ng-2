import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';

import { loginComponent }   from './login.component';
import { RegistrationComponent}   from './registration.component';
import { RegSuccessComponent}   from './registrationSuccess.component';


const appRoutes: Routes = [                      /**<declaring app route variables and then giving path of each components >*/
{ path: 'login', component: loginComponent },
  { path: 'register', component: RegistrationComponent },
    { path: 'regsuccess', component: RegSuccessComponent },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)
],
  exports: [
        FormsModule,
        ReactiveFormsModule
    ],
  declarations: [ AppComponent,RegistrationComponent,loginComponent,RegSuccessComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

