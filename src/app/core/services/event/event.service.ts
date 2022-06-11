import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { EventRequest } from '@shared/models/event/event-request.model';
import { EventConcise } from '@shared/models/event/event-concise.model';
import { Slice } from '@shared/models/page/slice.model';
import { PageParams } from '@shared/models/page/page-params.model';
import { Event } from '@shared/models/event/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  public createEvent(event: EventRequest): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/admin/event`, event);
  }

  public getEventsConcise(): Observable<EventConcise[]> {
    return this.http.get<EventConcise[]>(`${environment.apiUrl}/admin/event/concise/all`);
  }

  public getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${environment.apiUrl}/public/event/${id}`);
  }

  public getEventsConciseSlice(pageParams: PageParams): Observable<Slice<EventConcise>> {
    return this.http.get<Slice<EventConcise>>(
      `${environment.apiUrl}/public/event/concise/all`,
      { params: pageParams as any },
    );
  }
}
