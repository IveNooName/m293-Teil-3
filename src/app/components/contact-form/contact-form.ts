import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { SbbError, SbbFormField } from '@sbb-esta/lyne-angular/form-field';
import { SbbButton } from '@sbb-esta/lyne-angular/button';
import { SbbNotification } from '@sbb-esta/lyne-angular/notification';

@Component({
  imports: [ReactiveFormsModule, SbbFormField, SbbError, SbbButton, SbbNotification],
  selector: 'jfu-contact-form',
  styleUrl: './contact-form.scss',
  templateUrl: './contact-form.html',
})
export class ContactForm {
  private readonly fb = inject(FormBuilder);

  readonly subjects = ['Fenster', 'Türen', 'Schreinerarbeiten', 'Sonstiges'];
  readonly sent = signal(false);
  private readonly formDirective = viewChild.required(FormGroupDirective);

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: [this.subjects[0], Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  showError(name: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Schulprojekt: Es gibt kein Backend, die Anfrage wird nicht versendet.
    this.sent.set(true);
    // resetForm() setzt auch den Status «submitted» zurück, sonst bleiben die leeren Felder rot.
    this.formDirective().resetForm({ subject: this.subjects[0] });
  }
}
