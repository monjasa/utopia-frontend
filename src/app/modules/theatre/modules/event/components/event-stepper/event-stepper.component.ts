import { Component, OnInit } from '@angular/core';
import { Event } from '@shared/models/event/event.model';
import { EventService } from '@core/services/event/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuditoriumSeatReservation } from '@shared/models/auditorium/auditorium-seat-reservation.model';
import { EventReservationIdentifier } from '@shared/models/event/event-reservation-identifier.model';

@Component({
  selector: 'theatre-event-stepper',
  templateUrl: './event-stepper.component.html',
  styleUrls: ['./event-stepper.component.scss'],
})
export class EventStepperComponent implements OnInit {

  public event: Event | undefined;

  public selectedAuditoriumSeats: AuditoriumSeatReservation[] = [];

  public eventReservation: EventReservationIdentifier | undefined;

  public visitorDetailsForm: FormGroup;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.visitorDetailsForm = this.buildVisitorDetailsForm();
  }

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (Number(eventId)) {
      this.eventService.getEventById(Number(eventId))
        .subscribe((event: Event) => this.event = event);
    } else {
      void this.router.navigate(['/']);
    }
  }

  changeSelectedAuditoriumSeats($event: AuditoriumSeatReservation[]): void {
    this.selectedAuditoriumSeats = $event;
  }

  createEventReservation($event: EventReservationIdentifier): void {
    this.eventReservation = $event;
  }

  private buildVisitorDetailsForm(): FormGroup {
    return this.fb.group({
      name: [undefined, Validators.required],
      email: [undefined, [Validators.required, Validators.email]],
    });
  }
}
