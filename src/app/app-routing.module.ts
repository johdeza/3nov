import { PanelNutriologistComponent } from './panel-nutriologist/panel-nutriologist.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  { path: 'panelnutriologo', loadChildren: './panel-nutriologist/panel-nutriologist.module#PanelNutriologistModule' },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
