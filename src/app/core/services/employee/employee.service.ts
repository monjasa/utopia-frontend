import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { EmployeeConcise } from '@shared/models/employee/employee-concise.model';
import { EmployeeRequest } from '@shared/models/employee/employee-request.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  public createEmployee(employee: EmployeeRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/admin/employee`, employee);
  }

  public getEmployeesConcise(): Observable<EmployeeConcise[]> {
    return this.http.get<EmployeeConcise[]>(`${environment.apiUrl}/admin/employee/concise/all`);
  }
}
