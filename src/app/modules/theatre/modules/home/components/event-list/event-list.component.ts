import { Component, OnInit } from '@angular/core';
import { EventConcise } from '@shared/models/event/event-concise.model';
import { EventService } from '@core/services/event/event.service';
import { Slice } from '@shared/models/page/slice.model';

@Component({
  selector: 'theatre-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {

  public events: Slice<EventConcise> | undefined;

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getEventsConciseSlice({ page: 0, size: 20 })
      .subscribe((events: Slice<EventConcise>) => this.events = events);
  }
}
