import { NewnutriologistComponent } from './../sharedmodule/newnutriologist/newnutriologist.component';
import { HomeComponent } from './home.component';
import { CoverComponent } from './cover/cover.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [ 
      { path: '', component: CoverComponent},
      { path: 'login', component: LoginComponent},
      { path: 'nuevo-nutriologo', component: NewnutriologistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
