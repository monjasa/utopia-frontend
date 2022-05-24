import { AuditoriumSeatStatus } from '../enums/auditorium-seat-status.enum';

export interface AuditoriumSeat {
  rowPosition: number;
  columnPosition: number;
  status: AuditoriumSeatStatus;
  pricingPolicyDisplayPosition: number;
}
