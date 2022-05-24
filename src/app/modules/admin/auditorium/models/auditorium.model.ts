import { AuditoriumPart } from './auditorium-part.model';
import { AuditoriumSeatPricingPolicy } from './auditorium-seat-pricing-policy.model';

export interface Auditorium {
  name: string;
  seatPricingPolicies: AuditoriumSeatPricingPolicy[];
  parts: AuditoriumPart[];
}
