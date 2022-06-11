import { AuditoriumSeatPricingPolicy } from '@shared/models/auditorium/auditorium-seat-pricing-policy.model';
import { AuditoriumPartReservation } from '@shared/models/auditorium/auditorium-part-reservation.model';

export interface AuditoriumReservation {
  id: number;
  name: string;
  parts: AuditoriumPartReservation[];
  seatPricingPolicies: AuditoriumSeatPricingPolicy[];
}
