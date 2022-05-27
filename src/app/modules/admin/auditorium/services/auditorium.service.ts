import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auditorium } from '../models/auditorium.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuditoriumService {

  constructor(private http: HttpClient) {
  }

  public createAuditorium(auditorium: Auditorium): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/admin/auditorium`, auditorium);
  }
}
