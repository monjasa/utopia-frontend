import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PerformanceGenre } from '../models/performance-genre.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PerformanceGenreService {

  constructor(private http: HttpClient) {
  }

  public getAllPerformanceGenres(): Observable<PerformanceGenre[]> {
    return this.http.get<PerformanceGenre[]>(`${environment.apiUrl}/public/performance/genre/all`);
  }
}
