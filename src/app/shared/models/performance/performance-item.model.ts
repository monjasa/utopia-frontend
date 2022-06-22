import { PerformanceAttachments } from '@shared/models/performance/performance-attachments.model';
import { PerformanceGenre } from '@shared/models/performance/performance-genre.model';

export interface PerformanceItem {
  id: number;
  title: string;
  attachments: PerformanceAttachments;
  genre: PerformanceGenre;
}
