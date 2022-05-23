import { Component, Input } from '@angular/core';
import { AuditoriumSeatPricingPolicy } from '../../models/auditorium-seat-pricing-policy.model';
import { AuditoriumSeatPricingPolicyService } from '../../services/auditorium-seat-pricing-policy.service';

@Component({
  selector: 'admin-auditorium-seat-pricing-policies-group',
  templateUrl: './auditorium-seat-pricing-policies-group.component.html',
  styleUrls: ['./auditorium-seat-pricing-policies-group.component.scss']
})
export class AuditoriumSeatPricingPoliciesGroupComponent {

  @Input() auditoriumSeatPricingPolicies: AuditoriumSeatPricingPolicy[] | undefined;

  selectedIndex: number | null | undefined;

  constructor(private auditoriumSeatPricingPolicyService: AuditoriumSeatPricingPolicyService) {
  }

  changeAuditoriumSeatPricingPolicy($event: AuditoriumSeatPricingPolicy): void {
    if (this.auditoriumSeatPricingPolicies) {
      this.selectedIndex = this.auditoriumSeatPricingPolicies
        .findIndex((value: AuditoriumSeatPricingPolicy) => value.displayPosition === $event.displayPosition)
      this.auditoriumSeatPricingPolicyService.nextSelected(this.auditoriumSeatPricingPolicies[this.selectedIndex]);
    }
  }
}
