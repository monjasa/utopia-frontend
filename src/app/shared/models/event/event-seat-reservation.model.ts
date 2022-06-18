import { AuditoriumSeat } from '@shared/models/auditorium/auditorium-seat.model';
import { EventSeatReservationStatus } from '@shared/models/event/enums/event-seat-reservation-status.enum';

export interface EventSeatReservation {
  id: number;
  uuid: string;
  status: EventSeatReservationStatus;
  seat: AuditoriumSeat;
}
