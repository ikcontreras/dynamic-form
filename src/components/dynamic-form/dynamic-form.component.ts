import {Component, input, model, OnInit} from '@angular/core';
import {DynamicFormSection} from './dynamic-form.types';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {
  section = input.required<DynamicFormSection>();

  form = model.required<FormGroup>();

  ngOnInit(): void {
    const formGroup= new FormGroup({});

    for (let field of this.section().fields) {
      formGroup.addControl(field.code, new FormControl());
    }

    this.form.set(formGroup);
  }
}
