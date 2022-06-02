import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auditorium } from '@shared/models/auditorium/auditorium.model';
import { AuditoriumPart } from '@shared/models/auditorium/auditorium-part.model';
import { AuditoriumSeatPricingPolicy } from '@shared/models/auditorium/auditorium-seat-pricing-policy.model';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'admin-auditorium-stepper',
  templateUrl: './auditorium-stepper.component.html',
  styleUrls: ['./auditorium-stepper.component.scss'],
})
export class AuditoriumStepperComponent implements OnInit {

  auditorium$: Observable<Auditorium> | undefined;

  auditoriumForm: FormGroup;
  auditoriumSeatPricingPoliciesForm: FormGroup;
  auditoriumPartsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.auditoriumForm = this.buildAuditoriumForm();
    this.auditoriumSeatPricingPoliciesForm = this.buildAuditoriumSeatPricingPoliciesForm();
    this.auditoriumPartsForm = this.buildAuditoriumPartsForm();
  }

  private buildAuditoriumForm() {
    return this.fb.group({
      name: [undefined, Validators.required],
    });
  }

  private buildAuditoriumSeatPricingPoliciesForm() {
    return this.fb.group({
      seatPricingPolicies: this.fb.array([], Validators.required),
    });
  }

  private buildAuditoriumPartsForm() {
    return this.fb.group({
      parts: this.fb.array([], Validators.required),
    });
  }

  ngOnInit(): void {
    const auditoriumForm = this.auditoriumForm;
    const seatPricingPoliciesForm = this.auditoriumSeatPricingPoliciesForm.get('seatPricingPolicies') as FormGroup;
    const partsForm = this.auditoriumPartsForm.get('parts') as FormGroup;

    this.auditorium$ = combineLatest([
      auditoriumForm.valueChanges,
      seatPricingPoliciesForm.valueChanges,
      partsForm.valueChanges,
    ]).pipe(
      map(([auditorium, auditoriumSeatPricingPolicies, auditoriumParts]: [Auditorium, AuditoriumSeatPricingPolicy[], AuditoriumPart[]]) => {
        auditorium.seatPricingPolicies = auditoriumSeatPricingPolicies;
        auditorium.parts = auditoriumParts;
        return auditorium;
      }),
    );
  }
}
