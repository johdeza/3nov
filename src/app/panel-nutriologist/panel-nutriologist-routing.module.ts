import { DashboardNutriologistComponent } from './dashboard-nutriologist/dashboard-nutriologist.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PanelNutriologistComponent } from './panel-nutriologist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  component: PanelNutriologistComponent,
  children: [
    { path: '', component: DashboardNutriologistComponent},
    { path: 'nuevo-paciente', component: NewPatientComponent},
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelNutriologistRoutingModule { }
