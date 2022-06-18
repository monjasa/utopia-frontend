import { InvoiceStatus } from '@shared/models/invoice/enums/invoice-status.enum';
import { InvoiceCharge } from '@shared/models/invoice/invoice-charge.model';

export interface InvoiceState {
  id: number;
  number: string;
  status: InvoiceStatus;
  charge: InvoiceCharge;
}
