import { AuditoriumPartDimension } from './auditorium-part-dimension.model';
import { AuditoriumSeatRequest } from './auditorium-seat-request.model';

export interface AuditoriumPartRequest {
  name: string;
  displayPosition: number;
  dimension: AuditoriumPartDimension;
  seats: AuditoriumSeatRequest[];
}
