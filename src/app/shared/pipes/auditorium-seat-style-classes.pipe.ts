import { Pipe, PipeTransform } from '@angular/core';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';
import { AuditoriumSeatStatus } from '@shared/models/auditorium/enums/auditorium-seat-status.enum';

@Pipe({
  name: 'auditoriumSeatStyleClassesPipe',
})
export class AuditoriumSeatStyleClassesPipe implements PipeTransform {

  transform(auditoriumSeat: AuditoriumSeatReservation, ...args: unknown[]): { [styleClass: string]: boolean } {
    return {
      'reserved': auditoriumSeat.reserved,
      'unavailable': auditoriumSeat.status == AuditoriumSeatStatus.UNAVAILABLE,
    };
  }
}
