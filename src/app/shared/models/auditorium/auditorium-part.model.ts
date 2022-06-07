import { AuditoriumPartDimension } from './auditorium-part-dimension.model';
import { AuditoriumSeat } from './auditorium-seat.model';

export interface AuditoriumPart {
  name: string;
  displayPosition: number;
  dimension: AuditoriumPartDimension;
  seats: AuditoriumSeat[];
}
