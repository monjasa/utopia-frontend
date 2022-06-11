import { AuditoriumSeatStatus } from './enums/auditorium-seat-status.enum';
import { AuditoriumSeatPricingPolicy } from '@shared/models/auditorium/auditorium-seat-pricing-policy.model';

export interface AuditoriumSeatReservation {
  id: number;
  partName: string;
  rowPosition: number;
  columnPosition: number;
  status: AuditoriumSeatStatus;
  pricingPolicy: AuditoriumSeatPricingPolicy;
  reserved: boolean;
}
