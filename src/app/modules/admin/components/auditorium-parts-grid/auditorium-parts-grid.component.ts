import { Component, Input } from '@angular/core';
import { AuditoriumPart } from '../../models/auditorium-part.model';

@Component({
  selector: 'admin-auditorium-parts-grid',
  templateUrl: './auditorium-parts-grid.component.html',
  styleUrls: ['./auditorium-parts-grid.component.scss'],
})
export class AuditoriumPartsGridComponent {

  @Input()
  public auditoriumParts: AuditoriumPart[] | undefined;

  constructor() {
  }
}
