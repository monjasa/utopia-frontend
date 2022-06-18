import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { EventReservationIdentifier } from '@shared/models/event/event-reservation-identifier.model';
import { PaymentCheckout } from '@shared/models/payment/payment-checkout.model';
import { PaymentService } from '@core/services/payment/payment.service';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';
import { LocalStorageService } from '@core/services/common/local-storage.service';
import { EVENT_RESERVATION_KEY } from '@shared/constants/local-storage.constants';
import { CountdownFractionComponent } from '@shared/components/countdown-fraction/countdown-fraction.component';

@Component({
  selector: 'theatre-event-reservation-payment-step',
  templateUrl: './event-reservation-payment-step.component.html',
  styleUrls: ['./event-reservation-payment-step.component.scss'],
})
export class EventReservationPaymentStepComponent implements OnChanges {

  @Input() public eventReservation: EventReservationIdentifier | undefined;

  @Input() public selectedAuditoriumSeats: AuditoriumSeatReservation[] = [];

  public selectedAuditoriumSeatsPrice: number = 0;

  public paymentCheckout: PaymentCheckout | undefined;

  public eventReservationExpired: boolean = false;

  @ViewChild('countdown') private countdown: CountdownFractionComponent | undefined;

  constructor(private paymentService: PaymentService, private localStorageService: LocalStorageService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['eventReservation']) {
      this.changeEventReservation();
    }
    if (changes['selectedAuditoriumSeats']) {
      this.changeSelectedAuditoriumSeats();
    }
  }

  finishCountdown(): void {
    this.eventReservationExpired = true;
  }

  private changeEventReservation() {
    if (this.eventReservation) {
      this.countdown?.start();
      this.localStorageService.setItem(EVENT_RESERVATION_KEY, this.eventReservation.uuid);
      this.paymentService.getPaymentCheckoutByEventReservationUuid(this.eventReservation.uuid)
        .subscribe((paymentCheckout: PaymentCheckout) => this.paymentCheckout = paymentCheckout);
    }
  }

  private changeSelectedAuditoriumSeats() {
    this.selectedAuditoriumSeatsPrice = this.selectedAuditoriumSeats
      .map((auditoriumSeat: AuditoriumSeatReservation) => auditoriumSeat.pricingPolicy.price)
      .reduce((sum: number, price: number) => sum + price, 0);
  }
}
