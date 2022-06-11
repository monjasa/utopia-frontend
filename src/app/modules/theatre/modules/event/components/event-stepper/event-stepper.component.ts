import { Component, OnInit } from '@angular/core';
import { Event } from '@shared/models/event/event.model';
import { EventService } from '@core/services/event/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'theatre-event-stepper',
  templateUrl: './event-stepper.component.html',
  styleUrls: ['./event-stepper.component.scss'],
})
export class EventStepperComponent implements OnInit {

  public event: Event | undefined;

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) {
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
}
