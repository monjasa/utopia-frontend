import { Component, Input } from '@angular/core';
import { Event } from '@shared/models/event/event.model';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';

@Component({
  selector: 'theatre-auditorium-seats-step',
  templateUrl: './auditorium-seats-step.component.html',
  styleUrls: ['./auditorium-seats-step.component.scss'],
})
export class AuditoriumSeatsStepComponent {

  @Input() public event: Event | undefined;

  public selectedAuditoriumSeats: AuditoriumSeatReservation[] = [];

  changeSelectedAuditoriumSeats($event: AuditoriumSeatReservation[]) {
    this.selectedAuditoriumSeats = $event;
  }

  get selectedAuditoriumSeatsPrice(): number {
    return this.selectedAuditoriumSeats
      .map((auditoriumSeat: AuditoriumSeatReservation) => auditoriumSeat.pricingPolicy.price)
      .reduce((sum: number, price: number) => sum + price, 0);
  }
}
