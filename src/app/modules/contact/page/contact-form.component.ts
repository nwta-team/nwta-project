import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FirestoreService } from 'src/app/data/service/firestore.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {

  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private fireservice: FirestoreService) {
  }

  signForNewsletter(newsletterForm: NgForm) {
    if (newsletterForm && newsletterForm.valid) {
      const email = newsletterForm.form.value.email;
      this.fireservice.addEmailToNewsletter(email);
    } else {
      this.errorMessage = 'Please enter an email.';
    }
  }

}
