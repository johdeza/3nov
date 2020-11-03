import { ReactiveFormsModule } from '@angular/forms';
import { SharedmoduleModule } from './../sharedmodule/sharedmodule.module';
import { HomeComponent } from './home.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoverComponent } from './cover/cover.component';


@NgModule({
  declarations: [HomeComponent, LoginComponent, NavbarHomeComponent, CoverComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedmoduleModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
