import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '@core/services/employee/employee.service';
import { EmployeeConcise } from '@shared/models/employee/employee-concise.model';

@Component({
  selector: 'admin-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {

  public employees: EmployeeConcise[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployeesConcise()
      .subscribe((employees: EmployeeConcise[]) => this.employees = employees);
  }
}
