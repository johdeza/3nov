import { ReactiveFormsModule } from '@angular/forms';
import { PanelNutriologistComponent } from './panel-nutriologist.component';
import { SharedmoduleModule } from './../sharedmodule/sharedmodule.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelNutriologistRoutingModule } from './panel-nutriologist-routing.module';
import { NavbarNutriologistComponent } from './navbar-nutriologist/navbar-nutriologist.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { DashboardNutriologistComponent } from './dashboard-nutriologist/dashboard-nutriologist.component';


@NgModule({
  declarations: [PanelNutriologistComponent, NavbarNutriologistComponent, NewPatientComponent, DashboardNutriologistComponent],
  imports: [
    CommonModule,
    PanelNutriologistRoutingModule,
    SharedmoduleModule,
    ReactiveFormsModule
  ]
})
export class PanelNutriologistModule { }
