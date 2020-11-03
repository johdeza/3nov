import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedmoduleRoutingModule } from './sharedmodule-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NewnutriologistComponent } from './newnutriologist/newnutriologist.component';


@NgModule({
  declarations: [FooterComponent, NewnutriologistComponent],
  imports: [
    CommonModule,
    SharedmoduleRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [FooterComponent]
})
export class SharedmoduleModule { }
