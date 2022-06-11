import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AuditoriumReservation } from '@shared/models/auditorium/auditorium-reservation.model';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';
import panzoom, { PanZoom, PanZoomOptions } from 'panzoom';

@Component({
  selector: 'theatre-auditorium',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.scss'],
})
export class AuditoriumComponent implements AfterViewInit {

  @Input() public auditorium: AuditoriumReservation | undefined;

  @Output() public selectedAuditoriumSeatsChange = new EventEmitter<AuditoriumSeatReservation[]>();

  @ViewChild('auditoriumPartsElement', { static: false }) private scene: ElementRef | undefined;

  private selectedAuditoriumSeats: Set<AuditoriumSeatReservation> = new Set();

  private panZoom: PanZoom | undefined;

  ngAfterViewInit(): void {
    this.panZoom = panzoom(this.scene?.nativeElement, <PanZoomOptions>{
        bounds: true,
        minZoom: 0.50,
        maxZoom: 1.50,
        onTouch: (e: TouchEvent) => {
          if (e.target instanceof HTMLElement) {
            e.target.click();
          }
          return true;
        },
      },
    );
  }

  selectAuditoriumSeat($event: AuditoriumSeatReservation) {
    if (this.selectedAuditoriumSeats.has($event)) {
      this.selectedAuditoriumSeats.delete($event);
    } else {
      this.selectedAuditoriumSeats.add($event);
    }
    this.selectedAuditoriumSeatsChanged();
  }

  selectedAuditoriumSeatsChanged() {
    const selectedAuditoriumSeats = Array.from(this.selectedAuditoriumSeats);
    this.selectedAuditoriumSeatsChange.emit(selectedAuditoriumSeats);
  }
}
