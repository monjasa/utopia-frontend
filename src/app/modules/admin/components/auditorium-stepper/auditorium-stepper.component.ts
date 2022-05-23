import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auditorium } from '../../models/auditorium.model';
import { AuditoriumPart } from '../../models/auditorium-part.model';
import { AuditoriumSeatPricingPolicy } from '../../models/auditorium-seat-pricing-policy.model';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'admin-auditorium-stepper',
  templateUrl: './auditorium-stepper.component.html',
  styleUrls: ['./auditorium-stepper.component.scss'],
})
export class AuditoriumStepperComponent implements OnInit {

  public auditorium$: Observable<Auditorium> | undefined;

  public auditoriumForm: FormGroup;

  public auditoriumSeatPricingPoliciesForm: FormGroup;

  public auditoriumPartsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.auditoriumForm = this.fb.group({
      name: [undefined, Validators.required],
    });
    this.auditoriumSeatPricingPoliciesForm = this.fb.group({
      seatPricingPolicies: this.fb.array([], Validators.required),
    })
    this.auditoriumPartsForm = this.fb.group({
      parts: this.fb.array([], Validators.required),
    });
  }

  ngOnInit(): void {
    this.auditorium$ = combineLatest([
      this.auditoriumForm.valueChanges,
      this.auditoriumSeatPricingPoliciesForm.get('seatPricingPolicies')!.valueChanges,
      this.auditoriumPartsForm.get('parts')!.valueChanges,
    ]).pipe(
      map(([auditorium, auditoriumSeatPricingPolicies, auditoriumParts]: [Auditorium, AuditoriumSeatPricingPolicy[], AuditoriumPart[]]) => {
        auditorium.seatPricingPolicies = auditoriumSeatPricingPolicies;
        auditorium.parts = auditoriumParts;
        return auditorium;
      }),
    );
  }
}
