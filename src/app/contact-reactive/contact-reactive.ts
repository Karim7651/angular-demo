import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './contact-reactive.html',
  styleUrl: './contact-reactive.css',
})
export class ContactReactive {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern(/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  get name() { return this.form.get('name')!; }       // non-null assertion
  get email() { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }
  get terms() { return this.form.get('terms')!; }

  onSubmit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
    this.form.reset();
  }
}