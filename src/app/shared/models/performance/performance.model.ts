import { PerformanceGenre } from '@shared/models/performance/performance-genre.model';
import { PerformanceAttachments } from '@shared/models/performance/performance-attachments.model';

export interface Performance {
  id: number;
  title: string;
  description: string | null;
  duration: string;
  attachments: PerformanceAttachments;
  genre: PerformanceGenre;
}
