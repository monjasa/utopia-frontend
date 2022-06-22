import { EmployeePositionItem } from '@shared/models/employee/employee-position-item.model';

export interface EmployeeConcise {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  position: EmployeePositionItem;
}
