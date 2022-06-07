import { Component, OnInit } from '@angular/core';
import { EventService } from '@core/services/event/event.service';
import { EventConcise } from '@shared/models/event/event-concise.model';

@Component({
  selector: 'admin-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {

  public events: EventConcise[] = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getEventsConcise()
      .subscribe((events: EventConcise[]) => this.events = events);
  }
}
