import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'admin-auditorium',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.scss'],
})
export class AuditoriumComponent {

  auditoriumForm = this.fb.group({
    name: [undefined, Validators.required],
  });

  auditoriumPartsForm = this.fb.group({
    parts: this.fb.array([this.createAuditoriumPartForm()], Validators.required),
  });

  constructor(private fb: FormBuilder) {
  }

  private createAuditoriumPartForm() {
    return this.fb.group({
      name: [undefined, Validators.required],
      dimension: this.fb.group({
        rows: [10, Validators.required],
        seats: [15, Validators.required],
      }),
    });
  }

  addAuditoriumPartForm() {
    const auditoriumPartForm = this.createAuditoriumPartForm();
    this.auditoriumPartsFormArray.push(auditoriumPartForm);
  }

  removeAuditoriumPartForm(index: number) {
    this.auditoriumPartsFormArray.removeAt(index);
  }

  get auditoriumPartsFormArray(): FormArray {
    return this.auditoriumPartsForm.get('parts') as FormArray;
  }
}
