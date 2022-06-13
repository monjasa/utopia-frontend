import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { EventReservationIdentifier } from '@shared/models/event/event-reservation-identifier.model';
import { PaymentCheckout } from '@shared/models/payment/payment-checkout.model';
import { PaymentService } from '@core/services/payment/payment.service';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';
import { LocalStorageService } from '@core/services/common/local-storage.service';
import { EVENT_RESERVATION_KEY } from '@shared/constants/local-storage.constants';
import { CountdownComponent, CountdownEvent } from 'ngx-countdown';
import { CountdownConfig } from 'ngx-countdown/interfaces';

@Component({
  selector: 'theatre-event-reservation-payment-step',
  templateUrl: './event-reservation-payment-step.component.html',
  styleUrls: ['./event-reservation-payment-step.component.scss'],
})
export class EventReservationPaymentStepComponent implements OnChanges {

  private readonly _secondsTotal = 900;

  @Input() public eventReservation: EventReservationIdentifier | undefined;

  @Input() public selectedAuditoriumSeats: AuditoriumSeatReservation[] = [];

  @ViewChild('countdown', { static: false }) private countdown: CountdownComponent | undefined;

  public countdownConfig: CountdownConfig;

  public selectedAuditoriumSeatsPrice: number = 0;

  public paymentCheckout: PaymentCheckout | undefined;

  public remainingFraction: number = 100;

  constructor(private paymentService: PaymentService, private localStorageService: LocalStorageService) {
    this.countdownConfig = {
      leftTime: this._secondsTotal,
      format: 'mm:ss',
      demand: true,
      notify: 0,
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['eventReservation']) {
      this.changeEventReservation();
    }
    if (changes['selectedAuditoriumSeats']) {
      this.changeSelectedAuditoriumSeats();
    }
  }

  private changeEventReservation() {
    if (this.eventReservation) {
      this.countdown?.begin();
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

  handleEvent($event: CountdownEvent) {
    const secondsLeft = $event.left / 1000;
    this.remainingFraction = secondsLeft / this._secondsTotal;
  }
}
