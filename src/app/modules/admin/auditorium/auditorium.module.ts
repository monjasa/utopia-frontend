import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditoriumRoutingModule } from './auditorium-routing.module';
import { AuditoriumStepComponent } from './components/auditorium-step/auditorium-step.component';
import { AuditoriumSeatPricingPoliciesStepComponent} from './components/auditorium-seat-pricing-policies-step/auditorium-seat-pricing-policies-step.component';
import { AuditoriumPartsStepComponent } from './components/auditorium-parts-step/auditorium-parts-step.component';
import { AuditoriumSeatsStepComponent } from './components/auditorium-seats-step/auditorium-seats-step.component';
import { AuditoriumStepperComponent } from './components/auditorium-stepper/auditorium-stepper.component';
import { AuditoriumPartsGridComponent } from './components/auditorium-parts-grid/auditorium-parts-grid.component';
import { AuditoriumPartGridComponent } from './components/auditorium-part-grid/auditorium-part-grid.component';
import { AuditoriumSeatComponent } from './components/auditorium-seat/auditorium-seat.component';
import { AuditoriumSeatPricingPoliciesComponent } from './components/auditorium-seat-pricing-policies/auditorium-seat-pricing-policies.component';
import { AuditoriumSeatPricingPolicyComponent } from './components/auditorium-seat-pricing-policy/auditorium-seat-pricing-policy.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuditoriumStepComponent,
    AuditoriumSeatPricingPoliciesStepComponent,
    AuditoriumPartsStepComponent,
    AuditoriumSeatsStepComponent,
    AuditoriumStepperComponent,
    AuditoriumPartsGridComponent,
    AuditoriumPartGridComponent,
    AuditoriumSeatComponent,
    AuditoriumSeatPricingPoliciesComponent,
    AuditoriumSeatPricingPolicyComponent
  ],
  imports: [
    CommonModule,
    AuditoriumRoutingModule,
    SharedModule,
    CdkStepperModule,
    ReactiveFormsModule,
  ],
})
export class AuditoriumModule { }
