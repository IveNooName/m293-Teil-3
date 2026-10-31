import { Component } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';

@Component({
  imports: [ContactForm],
  selector: 'jfu-contact-page',
  styleUrl: './contact-page.scss',
  templateUrl: './contact-page.html',
})
export class ContactPage {}
