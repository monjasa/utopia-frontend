import { Component, Input } from '@angular/core';
import { Auditorium } from '../../models/auditorium.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-auditorium-seats',
  templateUrl: './auditorium-seats.component.html',
  styleUrls: ['./auditorium-seats.component.scss'],
})
export class AuditoriumSeatsComponent {

  @Input() auditorium$: Observable<Auditorium> | undefined;

}
