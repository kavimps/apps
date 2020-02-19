import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [RootComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RootRoutingModule
  ]
})
export class RootModule { }
