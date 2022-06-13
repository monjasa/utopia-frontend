import { VisitorDetails } from '@shared/models/event/visitor-details.model';
import { EventSeatReservationRequest } from '@shared/models/event/event-seat-reservation-request.model';

export interface EventReservationRequest {
  eventId: number;
  visitorDetails: VisitorDetails;
  seatReservations: EventSeatReservationRequest[];
}
