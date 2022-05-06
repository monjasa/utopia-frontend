import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data.model';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  public getData(): Observable<Data> {
    return this.http
      .get<Data>(`${environment.apiUrl}/app/test`);
  }
}
