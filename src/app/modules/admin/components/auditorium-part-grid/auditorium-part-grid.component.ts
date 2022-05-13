import { Component, Input, OnInit } from '@angular/core';
import { AuditoriumPart } from '../../models/auditorium-part.model';
import { AuditoriumPartRowSeat } from '../../models/auditorium-part-row-seat.model';

@Component({
  selector: 'admin-auditorium-part-grid',
  templateUrl: './auditorium-part-grid.component.html',
  styleUrls: ['./auditorium-part-grid.component.scss'],
})
export class AuditoriumPartGridComponent implements OnInit {

  @Input()
  public auditoriumPart: AuditoriumPart | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeAuditoriumSeat($event: AuditoriumPartRowSeat) {
    console.log($event);
  }

  get gridTemplate(): string {
    return `repeat(${this.auditoriumPartsRows}, 20px) / repeat(${this.auditoriumPartsSeats}, 20px)`;
  }

  get auditoriumPartsRows(): number {
    return this.auditoriumPart?.dimension.rows ?? 0;
  }

  get auditoriumPartsSeats(): number {
    return this.auditoriumPart?.dimension.seats ?? 0;
  }
}
