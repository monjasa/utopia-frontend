import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '@core/services/common/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeePositionItem } from '@shared/models/employee/employee-position-item.model';
import { EmployeeService } from '@core/services/employee/employee.service';
import { EmployeePositionService } from '@core/services/employee/employee-position.service';
import { EmployeeRequest } from '@shared/models/employee/employee-request.model';

@Component({
  selector: 'admin-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {

  public positions: EmployeePositionItem[] = [];

  public form: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private employeePositionService: EmployeePositionService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.form = this.buildEmployeeForm();
  }

  ngOnInit(): void {
    this.employeePositionService.getEmployeePositionItems()
      .subscribe((positions: EmployeePositionItem[]) => {
        this.positions = positions;
        this.selectPosition(this.positions[0]);
      });
  }

  submit(): void {
    if (!this.form.valid) {
      this.alertService.showWarningToast('Неможливо створити обліковий запис працівника через некоректне заповнення значень');
      return;
    }

    this.employeeService.createEmployee(this.buildEmployeeRequest())
      .subscribe(() => {
        this.router.navigate(['../all'], { relativeTo: this.route })
          .then(() => this.alertService.showSuccessToast('Обліковий запис працівника успішно створено'));
      });
  }

  private buildEmployeeForm(): FormGroup {
    return this.fb.group({
      firstName: [undefined, Validators.required],
      lastName: [undefined, Validators.required],
      email: [undefined, [Validators.required, Validators.email]],
      position: [undefined, Validators.required],
    });
  }

  private selectPosition(position: EmployeePositionItem | null): void {
    this.form.get('position')?.patchValue(position);
  }

  private buildEmployeeRequest(): EmployeeRequest {
    const {
      firstName,
      lastName,
      email,
      position,
    } = this.form.value;
    return {
      firstName,
      lastName,
      email,
      positionId: position.id,
    };
  }
}
