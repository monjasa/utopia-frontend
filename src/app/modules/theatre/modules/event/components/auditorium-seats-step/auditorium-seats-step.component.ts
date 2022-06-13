import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '@shared/models/event/event.model';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';

@Component({
  selector: 'theatre-auditorium-seats-step',
  templateUrl: './auditorium-seats-step.component.html',
  styleUrls: ['./auditorium-seats-step.component.scss'],
})
export class AuditoriumSeatsStepComponent {

  @Input() public event: Event | undefined;

  @Output() public selectedAuditoriumSeatsChange = new EventEmitter<AuditoriumSeatReservation[]>();

  public selectedAuditoriumSeats: AuditoriumSeatReservation[] = [];

  public selectedAuditoriumSeatsPrice: number = 0;

  changeSelectedAuditoriumSeats($event: AuditoriumSeatReservation[]) {
    this.selectedAuditoriumSeats = $event;
    this.selectedAuditoriumSeatsPrice = this.getSelectedAuditoriumSeatsPrice();
    this.selectedAuditoriumSeatsChange.emit(this.selectedAuditoriumSeats);
  }

  private getSelectedAuditoriumSeatsPrice(): number {
    return this.selectedAuditoriumSeats
      .map((auditoriumSeat: AuditoriumSeatReservation) => auditoriumSeat.pricingPolicy.price)
      .reduce((sum: number, price: number) => sum + price, 0);
  }
}
