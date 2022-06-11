import { Pipe, PipeTransform } from '@angular/core';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';
import { COLOR_PALETTE } from '@shared/constants/auditorium-color-palette.constants';

@Pipe({
  name: 'auditoriumSeatColor',
})
export class AuditoriumSeatColorPipe implements PipeTransform {

  transform(auditoriumSeat: AuditoriumSeatReservation, ...args: unknown[]): string {
    return COLOR_PALETTE[auditoriumSeat.pricingPolicy.displayPosition];
  }
}
