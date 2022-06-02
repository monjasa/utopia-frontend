import { PerformanceItem } from '@shared/models/performance/performance-item.model';
import { AuditoriumItem } from '@shared/models/auditorium/auditorium-item.model';

export interface EventConcise {
  id: number,
  startedAt: Date,
  endedAt: Date,
  performance: PerformanceItem,
  auditorium: AuditoriumItem
}
