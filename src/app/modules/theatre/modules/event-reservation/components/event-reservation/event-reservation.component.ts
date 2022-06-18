import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@core/services/common/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventReservationService } from '@core/services/event/event-reservation.service';
import { EventReservation } from '@shared/models/event/event-reservation.model';
import { validate } from 'uuid';
import { AlertService } from '@core/services/common/alert.service';


@Component({
  selector: 'app-event-reservation',
  templateUrl: './event-reservation.component.html',
  styleUrls: ['./event-reservation.component.scss'],
})
export class EventReservationComponent implements OnInit {

  public eventReservation: EventReservation | undefined;

  constructor(
    private eventReservationService: EventReservationService,
    private alertService: AlertService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const eventReservationUuid = this.route.snapshot.paramMap.get('uuid');
    if (eventReservationUuid && validate(eventReservationUuid)) {
      this.eventReservationService.getEventReservationByUuid(eventReservationUuid)
        .subscribe({
          next: (eventReservation: EventReservation) => {
            this.eventReservation = eventReservation;
          },
          error: () => this.router.navigate(['/'])
            .then(() => this.alertService.showErrorToast('Помилка завантаження бронювання квитків')),
        });
    } else {
      void this.router.navigate(['/']);
    }
  }
}
