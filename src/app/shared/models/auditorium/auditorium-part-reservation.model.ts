import { AuditoriumPartDimension } from './auditorium-part-dimension.model';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';

export interface AuditoriumPartReservation {
  id: number;
  name: string;
  displayPosition: number;
  dimension: AuditoriumPartDimension;
  seats: AuditoriumSeatReservation[];
}
