import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuditoriumSeatPricingPolicy } from '@shared/models/auditorium/auditorium-seat-pricing-policy.model';

@Component({
  selector: 'admin-auditorium-seat-pricing-policies-step',
  templateUrl: './auditorium-seat-pricing-policies-step.component.html',
  styleUrls: ['./auditorium-seat-pricing-policies-step.component.scss'],
})
export class AuditoriumSeatPricingPoliciesStepComponent implements OnInit {

  @Input() formGroup: FormGroup | undefined;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addItemFormGroup();
  }

  addItemFormGroup() {
    const auditoriumPartForm = this.createItemFormGroup();
    this.formArray.push(auditoriumPartForm);
  }

  removeItemFormGroup(index: number) {
    this.formArray.removeAt(index);
  }

  onSubmit() {
    this.formArray.value
      .forEach((pricingPolicy: AuditoriumSeatPricingPolicy, index: number) => {
        pricingPolicy.displayPosition = index;
      });
  }

  get formArray(): FormArray {
    return this.formGroup?.get('seatPricingPolicies') as FormArray;
  }

  private createItemFormGroup() {
    return this.fb.group({
      price: [undefined, Validators.required],
    });
  }
}
