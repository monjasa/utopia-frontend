import Big from 'big.js';

export interface InvoiceCharge {
  subtotal: Big;
  concessionRate: Big;
  total: Big;
  currency: string;
}
