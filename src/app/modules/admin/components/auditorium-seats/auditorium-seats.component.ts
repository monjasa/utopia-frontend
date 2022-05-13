import { Component, Input, OnInit } from '@angular/core';
import { Auditorium } from '../../models/auditorium.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-auditorium-seats',
  templateUrl: './auditorium-seats.component.html',
  styleUrls: ['./auditorium-seats.component.scss'],
})
export class AuditoriumSeatsComponent implements OnInit {

  @Input()
  public auditorium$: Observable<Auditorium> | undefined;

  public auditorium: Auditorium | undefined;

  ngOnInit(): void {
    if (this.auditorium$) {
      this.auditorium$
        .subscribe((auditorium: Auditorium) => this.initializeAuditorium(auditorium));
    }
  }

  private initializeAuditorium(auditorium: Auditorium) {
    this.auditorium = auditorium;
  }
}
