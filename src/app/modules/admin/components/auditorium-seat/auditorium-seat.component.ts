import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuditoriumSeat } from '../../models/auditorium-seat.model';
import { COLOR_PALETTE } from '@shared/constants/auditorium-seat-color-palette.constants';
import { AuditoriumSeatStatus } from '../../enums/auditorium-seat-status.enum';

@Component({
  selector: 'admin-auditorium-seat',
  templateUrl: './auditorium-seat.component.html',
  styleUrls: ['./auditorium-seat.component.scss'],
})
export class AuditoriumSeatComponent {

  @Input() auditoriumSeat: AuditoriumSeat | undefined;

  @Output() auditoriumSeatChange = new EventEmitter<AuditoriumSeat>();


  auditoriumSeatChanged() {
    this.auditoriumSeatChange.emit(this.auditoriumSeat);
  }

  get color(): string {
    return this.auditoriumSeat ? COLOR_PALETTE[this.auditoriumSeat.pricingPolicyDisplayPosition] : '';
  }

  get unavailable(): boolean {
    return this.auditoriumSeat?.status === AuditoriumSeatStatus.UNAVAILABLE;
  }
}
