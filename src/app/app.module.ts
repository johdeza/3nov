import { PanelNutriologistModule } from './panel-nutriologist/panel-nutriologist.module';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { AuthService } from './services/auth.service';
import { NutriologoService } from './services/nutriologo.service';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PanelNutriologistModule,
    SharedmoduleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,       
  ],
  providers: [NutriologoService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
