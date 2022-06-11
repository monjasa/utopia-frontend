import { Pipe, PipeTransform } from '@angular/core';
import { AuditoriumPartRequest } from '@shared/models/auditorium/auditorium-part-request.model';
import { AuditoriumPartReservation } from '@shared/models/auditorium/auditorium-part-reservation.model';

@Pipe({
  name: 'auditoriumDimensionGridTemplate',
})
export class AuditoriumDimensionGridTemplatePipe implements PipeTransform {

  transform(auditoriumPart: AuditoriumPartRequest | AuditoriumPartReservation, ...args: unknown[]): string {
    return `repeat(${auditoriumPart.dimension.rows}, 20px) / repeat(${auditoriumPart.dimension.columns}, 20px)`;
  }
}
