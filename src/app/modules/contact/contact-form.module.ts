import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormComponent } from './page/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactFormRoutingModule
  ]
})
export class ContactFormModule {
}
