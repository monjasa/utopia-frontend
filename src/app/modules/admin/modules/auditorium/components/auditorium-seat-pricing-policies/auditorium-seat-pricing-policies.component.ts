import { Component, Input } from '@angular/core';
import { AuditoriumSeatPricingPolicy } from '@shared/models/auditorium/auditorium-seat-pricing-policy.model';
import { AuditoriumSeatPricingPolicyService } from '@core/services/auditorium/auditorium-seat-pricing-policy.service';

@Component({
  selector: 'admin-auditorium-seat-pricing-policies',
  templateUrl: './auditorium-seat-pricing-policies.component.html',
  styleUrls: ['./auditorium-seat-pricing-policies.component.scss'],
})
export class AuditoriumSeatPricingPoliciesComponent {

  @Input() auditoriumSeatPricingPolicies: AuditoriumSeatPricingPolicy[] | undefined;

  selectedIndex: number | null | undefined;

  constructor(private auditoriumSeatPricingPolicyService: AuditoriumSeatPricingPolicyService) {
  }

  changeAuditoriumSeatPricingPolicy($event: AuditoriumSeatPricingPolicy): void {
    if (this.auditoriumSeatPricingPolicies) {
      this.selectedIndex = this.auditoriumSeatPricingPolicies
        .findIndex((value: AuditoriumSeatPricingPolicy) => value.displayPosition === $event.displayPosition);
      this.auditoriumSeatPricingPolicyService.nextSelected(this.auditoriumSeatPricingPolicies[this.selectedIndex]);
    }
  }
}
