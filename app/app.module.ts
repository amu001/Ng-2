import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { RegistrationComponent}   from './registration.component'; /**<calling registration component method from registration.component.ts>*/
import { routing } from './app.routes';

const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponent },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)
],
  exports: [
        FormsModule,
        ReactiveFormsModule
    ],
  declarations: [ AppComponent,RegistrationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
