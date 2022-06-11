import { Component, Input } from '@angular/core';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';

@Component({
  selector: 'theatre-selected-auditorium-seats',
  templateUrl: './selected-auditorium-seats.component.html',
  styleUrls: ['./selected-auditorium-seats.component.scss'],
})
export class SelectedAuditoriumSeatsComponent {

  @Input() public auditoriumSeats: AuditoriumSeatReservation[] = [];

}
