import { AuditoriumPartRequest } from './auditorium-part-request.model';
import { AuditoriumSeatPricingPolicy } from './auditorium-seat-pricing-policy.model';

export interface AuditoriumRequest {
  name: string;
  parts: AuditoriumPartRequest[];
  seatPricingPolicies: AuditoriumSeatPricingPolicy[];
}
