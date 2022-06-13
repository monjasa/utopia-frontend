import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';
import { EventReservationService } from '@core/services/event/event-reservation.service';
import { EventReservationIdentifier } from '@shared/models/event/event-reservation-identifier.model';
import { EventReservationRequest } from '@shared/models/event/event-reservation-request.model';
import { EventSeatReservationRequest } from '@shared/models/event/event-seat-reservation-request.model';
import { CdkStepper } from '@angular/cdk/stepper';
import { Event } from '@shared/models/event/event.model';
import { VisitorDetails } from '@shared/models/event/visitor-details.model';

@Component({
  selector: 'theatre-visitor-details-step',
  templateUrl: './visitor-details-step.component.html',
  styleUrls: ['./visitor-details-step.component.scss'],
})
export class VisitorDetailsStepComponent implements OnChanges {

  @Input() public event: Event | undefined;

  @Input() public visitorDetailsForm: FormGroup | undefined;

  @Input() public selectedAuditoriumSeats: AuditoriumSeatReservation[] = [];

  @Output() public eventReservationCreate = new EventEmitter<EventReservationIdentifier>();

  public selectedAuditoriumSeatsPrice: number = 0;

  constructor(private eventReservationService: EventReservationService, private stepper: CdkStepper) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedAuditoriumSeats']) {
      this.selectedAuditoriumSeatsPrice = this.selectedAuditoriumSeats
        .map((auditoriumSeat: AuditoriumSeatReservation) => auditoriumSeat.pricingPolicy.price)
        .reduce((sum: number, price: number) => sum + price, 0);
    }
  }

  onNext(): void {
    if (this.event && this.visitorDetailsForm) {
      this.eventReservationService.createEventReservation(this.buildEventReservationRequest(this.event.id, this.visitorDetailsForm.value))
        .subscribe((eventReservation: EventReservationIdentifier) => {
          this.eventReservationCreate.emit(eventReservation);
          this.stepper.next();
        });
    }
  }

  onPrevious(): void {
    this.stepper.previous();
  }

  private buildEventReservationRequest(eventId: number, visitorDetails: VisitorDetails): EventReservationRequest {
    const seatReservations = this.buildSeatReservations();
    return {
      eventId,
      visitorDetails,
      seatReservations,
    };
  }

  private buildSeatReservations(): EventSeatReservationRequest[] {
    return this.selectedAuditoriumSeats.map((auditoriumSeatReservation: AuditoriumSeatReservation) => ({
      seatId: auditoriumSeatReservation.id,
    } as EventSeatReservationRequest));
  }
}
