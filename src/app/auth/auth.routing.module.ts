import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: '',
   // component: AppComponent,
    children: [
      { path: 'login',     component: LoginComponent },
      { path: 'register',  component: RegisterComponent },
    ]
 }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AuthRoutingModule { }
