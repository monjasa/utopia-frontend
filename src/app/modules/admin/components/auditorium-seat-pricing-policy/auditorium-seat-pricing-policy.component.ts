import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuditoriumSeatPricingPolicy } from '../../models/auditorium-seat-pricing-policy.model';
import { COLOR_PALETTE } from '@shared/constants/auditorium-seat-color-palette.constants';

@Component({
  selector: 'admin-auditorium-seat-pricing-policy',
  templateUrl: './auditorium-seat-pricing-policy.component.html',
  styleUrls: ['./auditorium-seat-pricing-policy.component.scss']
})
export class AuditoriumSeatPricingPolicyComponent {

  @Input() auditoriumSeatPricingPolicy: AuditoriumSeatPricingPolicy | undefined;

  @Input() selected: boolean | undefined;

  @Output() auditoriumSeatPricingPolicyChange = new EventEmitter<AuditoriumSeatPricingPolicy>();

  auditoriumSeatPricingPolicyChanged() {
    this.auditoriumSeatPricingPolicyChange.emit(this.auditoriumSeatPricingPolicy);
  }

  get color(): string {
    return this.auditoriumSeatPricingPolicy ? COLOR_PALETTE[this.auditoriumSeatPricingPolicy.displayPosition] : '';
  };
}
