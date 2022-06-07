import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { PerformanceRequest } from '@shared/models/performance/performance-request.model';
import { PerformanceItem } from '@shared/models/performance/performance-item.model';
import { PerformanceConcise } from '@shared/models/performance/performance-concise.model';

@Injectable({
  providedIn: 'root',
})
export class PerformanceService {

  constructor(private http: HttpClient) {
  }

  public createPerformance(performance: PerformanceRequest): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/admin/performance`, performance);
  }

  public getPerformanceItems(): Observable<PerformanceItem[]> {
    return this.http.get<PerformanceItem[]>(`${environment.apiUrl}/admin/performance/item/all`);
  }

  public getPerformancesConcise(): Observable<PerformanceConcise[]> {
    return this.http.get<PerformanceConcise[]>(`${environment.apiUrl}/admin/performance/concise/all`);
  }
}
