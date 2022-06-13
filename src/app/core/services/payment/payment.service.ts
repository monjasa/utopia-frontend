import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { PaymentCheckout } from '@shared/models/payment/payment-checkout.model';
import { WindowService } from '@core/services/common/window.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {

  constructor(private windowService: WindowService, private http: HttpClient) {
  }

  public getPaymentCheckoutByEventReservationUuid(eventReservationUuid: string): Observable<PaymentCheckout> {
    const redirectUrl = `${this.windowService.getOrigin()}/event-reservations/confirmation`;
    return this.http.get<PaymentCheckout>(
      `${environment.apiUrl}/public/payment/checkout`,
      { params: { eventReservationUuid, redirectUrl } },
    );
  }
}
