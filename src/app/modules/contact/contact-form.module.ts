import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormComponent } from './page/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactFormRoutingModule
  ]
})
export class ContactFormModule { }