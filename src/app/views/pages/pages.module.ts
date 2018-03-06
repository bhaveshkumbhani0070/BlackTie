import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { PagesRoutingModule } from './pages-routing.module';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  imports: [ 
    PagesRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ForgotComponent
  ]
})
export class PagesModule { }
