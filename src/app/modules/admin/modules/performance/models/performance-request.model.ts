import { PerformanceAttachments } from './performance-attachments.model';

export interface PerformanceRequest {
  title: string;
  description: string | null;
  duration: string;
  genreId: number;
  attachments: PerformanceAttachments;
}
