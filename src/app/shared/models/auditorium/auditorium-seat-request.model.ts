import { AuditoriumSeatStatus } from './enums/auditorium-seat-status.enum';

export interface AuditoriumSeatRequest {
  rowPosition: number;
  columnPosition: number;
  status: AuditoriumSeatStatus;
  pricingPolicyDisplayPosition: number;
}
