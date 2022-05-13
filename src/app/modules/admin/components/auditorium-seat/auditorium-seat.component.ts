import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuditoriumPartRowSeat } from '../../models/auditorium-part-row-seat.model';

@Component({
  selector: 'admin-auditorium-seat',
  templateUrl: './auditorium-seat.component.html',
  styleUrls: ['./auditorium-seat.component.scss'],
})
export class AuditoriumSeatComponent {

  @Input() auditoriumSeat: AuditoriumPartRowSeat | undefined;

  @Output() auditoriumSeatChange = new EventEmitter<AuditoriumPartRowSeat>();

  auditoriumSeatChanged() {
    this.auditoriumSeatChange.emit(this.auditoriumSeat);
  }
}
