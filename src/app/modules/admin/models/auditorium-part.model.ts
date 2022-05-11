import { AuditoriumPartRow } from './auditorium-part-row.model';
import { AuditoriumPartDimension } from './auditorium-part-dimension.model';

export interface AuditoriumPart {
  name: string;
  dimension: AuditoriumPartDimension;
  rows: AuditoriumPartRow[]
}
