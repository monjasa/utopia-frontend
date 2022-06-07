import { PerformanceGenre } from '@shared/models/performance/performance-genre.model';

export interface PerformanceConcise {
  id: number;
  title: string;
  description: string | null;
  genre: PerformanceGenre;
}
