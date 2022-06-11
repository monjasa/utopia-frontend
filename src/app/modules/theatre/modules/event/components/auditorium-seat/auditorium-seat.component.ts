import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';

@Component({
  selector: 'theatre-auditorium-seat',
  templateUrl: './auditorium-seat.component.html',
  styleUrls: ['./auditorium-seat.component.scss'],
})
export class AuditoriumSeatComponent {

  @Input() public auditoriumSeat: AuditoriumSeatReservation | undefined;

  @Output() public auditoriumSeatSelect = new EventEmitter<AuditoriumSeatReservation>();

  public selected: boolean = false;

  auditoriumSeatSelected() {
    if (this.auditoriumSeat && !this.auditoriumSeat.reserved) {
      this.selected = !this.selected;
      this.auditoriumSeatSelect.emit(this.auditoriumSeat);
    }
  }
}
