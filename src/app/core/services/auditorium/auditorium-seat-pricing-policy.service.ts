import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuditoriumSeatPricingPolicy } from '@shared/models/auditorium/auditorium-seat-pricing-policy.model';

@Injectable({
  providedIn: 'root'
})
export class AuditoriumSeatPricingPolicyService {

  selected$ = new BehaviorSubject<AuditoriumSeatPricingPolicy | null>(null);

  nextSelected(value: AuditoriumSeatPricingPolicy | null) {
    this.selected$.next(value);
  }
}
