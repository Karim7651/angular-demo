import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,NgClass],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  onSubmit(form: NgForm) {
    console.log(form.form);
    if(!form.form.valid){
      console.log('Form is not valid');
      return;
    }
    form.resetForm();
  }
}
