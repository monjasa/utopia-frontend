import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { PerformanceRequest } from '../models/performance-request.model';

@Injectable({
  providedIn: 'root',
})
export class PerformanceService {

  constructor(private http: HttpClient) {
  }

  public createPerformance(performance: PerformanceRequest): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/admin/performance`, performance);
  }
}
