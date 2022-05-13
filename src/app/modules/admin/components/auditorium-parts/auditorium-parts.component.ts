import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'admin-auditorium-parts',
  templateUrl: './auditorium-parts.component.html',
  styleUrls: ['./auditorium-parts.component.scss'],
})
export class AuditoriumPartsComponent {

  @Input()
  public auditoriumPartsForm: FormGroup | undefined;

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
    return this.auditoriumPartsForm?.get('parts') as FormArray;
  }
}
