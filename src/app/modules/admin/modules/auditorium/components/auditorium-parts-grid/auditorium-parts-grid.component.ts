import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AuditoriumPart } from '../../models/auditorium-part.model';

import panzoom, { PanZoom, PanZoomOptions } from 'panzoom';

@Component({
  selector: 'admin-auditorium-parts-grid',
  templateUrl: './auditorium-parts-grid.component.html',
  styleUrls: ['./auditorium-parts-grid.component.scss']
})
export class AuditoriumPartsGridComponent implements AfterViewInit
{

  @Input() auditoriumParts: AuditoriumPart[] | undefined;

  @ViewChild('auditoriumPartsElement', { static: false }) scene: ElementRef | undefined;

  private panZoom: PanZoom | undefined;

  ngAfterViewInit(): void {
    this.panZoom = panzoom(this.scene?.nativeElement, <PanZoomOptions>{
        bounds: true,
        minZoom: 0.50,
        maxZoom: 2
      },
    );
  }
}
