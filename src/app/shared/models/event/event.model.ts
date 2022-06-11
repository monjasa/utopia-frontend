import { Performance } from '@shared/models/performance/performance.model';
import { AuditoriumReservation } from '@shared/models/auditorium/auditorium-reservation.model';

export interface Event {
  id: number;
  startedAt: Date;
  endedAt: Date;
  performance: Performance;
  auditorium: AuditoriumReservation;
}
