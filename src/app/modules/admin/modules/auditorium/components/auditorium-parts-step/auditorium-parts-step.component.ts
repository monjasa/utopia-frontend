import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuditoriumSeat } from '@shared/models/auditorium/auditorium-seat.model';
import { AuditoriumSeatStatus } from '@shared/models/auditorium/enums/auditorium-seat-status.enum';
import { AuditoriumPartDimension } from '@shared/models/auditorium/auditorium-part-dimension.model';
import { AuditoriumPart } from '@shared/models/auditorium/auditorium-part.model';

@Component({
  selector: 'admin-auditorium-parts-step',
  templateUrl: './auditorium-parts-step.component.html',
  styleUrls: ['./auditorium-parts-step.component.scss'],
})
export class AuditoriumPartsStepComponent implements OnInit {

  @Input()
  auditoriumPartsForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addAuditoriumPartForm();
  }

  addAuditoriumPartForm() {
    const auditoriumPartForm = this.createAuditoriumPartForm();
    this.auditoriumPartsFormArray.push(auditoriumPartForm);
  }

  removeAuditoriumPartForm(index: number) {
    this.auditoriumPartsFormArray.removeAt(index);
  }

  onSubmit() {
    this.auditoriumPartsFormArray.value
      .forEach((auditoriumPart: AuditoriumPart, index: number) => {
        auditoriumPart.displayPosition = index;
        auditoriumPart.seats = this.generateAuditoriumPartSeats(auditoriumPart.dimension);
      });
  }

  get auditoriumPartsFormArray(): FormArray {
    return this.auditoriumPartsForm?.get('parts') as FormArray;
  }

  private createAuditoriumPartForm() {
    return this.fb.group({
      name: [undefined, Validators.required],
      dimension: this.fb.group({
        rows: [2, Validators.required],
        columns: [3, Validators.required],
      }),
    });
  }

  private generateAuditoriumPartSeats = (dimension: AuditoriumPartDimension): AuditoriumSeat[] => {
    const seats = [];
    for (let i = 0; i < dimension.rows; i++) {
      for (let j = 0; j < dimension.columns; j++) {
        seats.push({
          rowPosition: i,
          columnPosition: j,
          status: AuditoriumSeatStatus.AVAILABLE,
          pricingPolicyDisplayPosition: 0,
        } as AuditoriumSeat);
      }
    }
    return seats;
  };
}
