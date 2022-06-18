import { EventConcise } from '@shared/models/event/event-concise.model';
import { EventSeatReservation } from '@shared/models/event/event-seat-reservation.model';
import { InvoiceState } from '@shared/models/invoice/invoice-state.model';

export interface EventReservation {
  id: number;
  uuid: string;
  event: EventConcise;
  seatReservations: EventSeatReservation[];
  invoice: InvoiceState;
  deleted: boolean;
}
