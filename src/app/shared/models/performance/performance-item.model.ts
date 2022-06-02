import { PerformanceAttachments } from '@shared/models/performance/performance-attachments.model';

export interface PerformanceItem {
  id: number;
  title: string;
  attachments: PerformanceAttachments;
}
