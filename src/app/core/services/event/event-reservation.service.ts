import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { EventReservationRequest } from '@shared/models/event/event-reservation-request.model';
import { EventReservationIdentifier } from '@shared/models/event/event-reservation-identifier.model';

@Injectable({
  providedIn: 'root',
})
export class EventReservationService {

  constructor(private http: HttpClient) {
  }

  public createEventReservation(eventReservation: EventReservationRequest): Observable<EventReservationIdentifier> {
    return this.http.post<EventReservationIdentifier>(`${environment.apiUrl}/public/event-reservation`, eventReservation);
  }
}
