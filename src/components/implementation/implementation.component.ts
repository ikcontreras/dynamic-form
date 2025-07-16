import {Component, signal} from '@angular/core';
import {DynamicFormComponent} from '../dynamic-form/dynamic-form.component';
import {DynamicFormSection} from '../dynamic-form/dynamic-form.types';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-implementation',
  standalone: true,
  imports: [
    DynamicFormComponent
  ],
  templateUrl: './implementation.component.html',
  styleUrl: './implementation.component.css'
})
export class ImplementationComponent {
  section: DynamicFormSection = {
    name: 'Example Section',
    fields: [
      {
        id: 1,
        name: 'Example Field',
        code: 'field_1'
      },
      {
        id: 2,
        name: 'Example Field 2',
        code: 'field_2'
      }
    ]
  }
  sectionOneForm = new FormGroup({});

  sendForm() {
    console.log(this.sectionOneForm);
  }
}
