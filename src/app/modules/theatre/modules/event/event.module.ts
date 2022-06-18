import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { AuditoriumComponent } from './components/auditorium/auditorium.component';
import { AuditoriumSeatComponent } from './components/auditorium-seat/auditorium-seat.component';
import { SharedModule } from '@shared/shared.module';
import { SelectedAuditoriumSeatsComponent } from './components/selected-auditorium-seats/selected-auditorium-seats.component';
import { EventStepperComponent } from './components/event-stepper/event-stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { AuditoriumSeatsStepComponent } from './components/auditorium-seats-step/auditorium-seats-step.component';
import { VisitorDetailsStepComponent } from './components/visitor-details-step/visitor-details-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventReservationPaymentStepComponent } from './components/event-reservation-payment-step/event-reservation-payment-step.component';


@NgModule({
  declarations: [
    AuditoriumComponent,
    AuditoriumSeatComponent,
    SelectedAuditoriumSeatsComponent,
    EventStepperComponent,
    AuditoriumSeatsStepComponent,
    VisitorDetailsStepComponent,
    EventReservationPaymentStepComponent,
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule,
    CdkStepperModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class EventModule {
}
