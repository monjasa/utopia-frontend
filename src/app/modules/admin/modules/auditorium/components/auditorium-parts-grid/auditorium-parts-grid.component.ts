import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AuditoriumPartRequest } from '@shared/models/auditorium/auditorium-part-request.model';

import panzoom, { PanZoom, PanZoomOptions } from 'panzoom';

@Component({
  selector: 'admin-auditorium-parts-grid',
  templateUrl: './auditorium-parts-grid.component.html',
  styleUrls: ['./auditorium-parts-grid.component.scss'],
})
export class AuditoriumPartsGridComponent implements AfterViewInit {

  @Input() auditoriumParts: AuditoriumPartRequest[] | undefined;

  @ViewChild('auditoriumPartsElement') scene: ElementRef | undefined;

  private panZoom: PanZoom | undefined;

  ngAfterViewInit(): void {
    this.panZoom = panzoom(this.scene?.nativeElement, <PanZoomOptions>{
        bounds: true,
        minZoom: 0.50,
        maxZoom: 1.50,
        zoomDoubleClickSpeed: 1,
        onTouch: (e: TouchEvent) => {
          if (e.target instanceof HTMLElement) {
            e.target.click();
          }
          return true;
        },
      },
    );
  }
}
