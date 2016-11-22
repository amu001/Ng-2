import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration.component';

export const routes: Routes = [
  { path: '/', component: AppComponent },
  { path: 'register', component: RegistrationComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);