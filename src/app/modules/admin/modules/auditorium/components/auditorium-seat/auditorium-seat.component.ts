import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COLOR_PALETTE } from '@shared/constants/auditorium-color-palette.constants';
import { AuditoriumSeatRequest } from '@shared/models/auditorium/auditorium-seat-request.model';
import { AuditoriumSeatStatus } from '@shared/models/auditorium/enums/auditorium-seat-status.enum';

@Component({
  selector: 'admin-auditorium-seat',
  templateUrl: './auditorium-seat.component.html',
  styleUrls: ['./auditorium-seat.component.scss'],
})
export class AuditoriumSeatComponent {

  @Input() public auditoriumSeat: AuditoriumSeatRequest | undefined;

  @Output() public auditoriumSeatChange = new EventEmitter<AuditoriumSeatRequest>();

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
