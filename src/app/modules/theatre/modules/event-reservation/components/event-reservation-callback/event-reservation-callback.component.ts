import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@core/services/common/local-storage.service';
import { EVENT_RESERVATION_KEY } from '@shared/constants/local-storage.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'theatre-event-reservation-callback',
  templateUrl: './event-reservation-callback.component.html',
  styleUrls: ['./event-reservation-callback.component.scss'],
})
export class EventReservationCallbackComponent implements OnInit {

  private eventReservationUuid: string | null | undefined;

  constructor(private localStorageService: LocalStorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.eventReservationUuid = this.localStorageService.getItem(EVENT_RESERVATION_KEY);
    this.eventReservationUuid
      ? void this.router.navigate(['/event-reservations', this.eventReservationUuid])
      : void this.router.navigate(['/']);
  }
}
