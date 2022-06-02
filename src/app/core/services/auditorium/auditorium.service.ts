import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auditorium } from '@shared/models/auditorium/auditorium.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { AuditoriumItem } from '@shared/models/auditorium/auditorium-item.model';

@Injectable({
  providedIn: 'root',
})
export class AuditoriumService {

  constructor(private http: HttpClient) {
  }

  public createAuditorium(auditorium: Auditorium): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/admin/auditorium`, auditorium);
  }

  public getAuditoriumItems(): Observable<AuditoriumItem[]> {
    return this.http.get<AuditoriumItem[]>(`${environment.apiUrl}/admin/auditorium/item/all`);
  }
}
