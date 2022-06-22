import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeePositionItem } from '@shared/models/employee/employee-position-item.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeePositionService {

  constructor(private http: HttpClient) {
  }

  public getEmployeePositionItems(): Observable<EmployeePositionItem[]> {
    return this.http.get<EmployeePositionItem[]>(`${environment.apiUrl}/admin/employee-position/item/all`);
  }
}
