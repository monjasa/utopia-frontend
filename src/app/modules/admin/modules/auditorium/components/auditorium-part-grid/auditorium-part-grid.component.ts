import { Component, Input } from '@angular/core';
import { AuditoriumPartRequest } from '@shared/models/auditorium/auditorium-part-request.model';
import { AuditoriumSeatPricingPolicy } from '@shared/models/auditorium/auditorium-seat-pricing-policy.model';
import { AuditoriumSeatPricingPolicyService } from '@core/services/auditorium/auditorium-seat-pricing-policy.service';
import { AuditoriumSeatRequest } from '@shared/models/auditorium/auditorium-seat-request.model';
import { AuditoriumSeatStatus } from '@shared/models/auditorium/enums/auditorium-seat-status.enum';

@Component({
  selector: 'admin-auditorium-part-grid',
  templateUrl: './auditorium-part-grid.component.html',
  styleUrls: ['./auditorium-part-grid.component.scss'],
})
export class AuditoriumPartGridComponent {

  @Input() public auditoriumPart: AuditoriumPartRequest | undefined;

  private auditoriumSeatPricingPolicy: AuditoriumSeatPricingPolicy | null | undefined;

  constructor(private auditoriumSeatPricingPolicyService: AuditoriumSeatPricingPolicyService) {
    this.auditoriumSeatPricingPolicyService.selected$
      .subscribe((auditoriumSeatPricingPolicy: AuditoriumSeatPricingPolicy | null) => this.auditoriumSeatPricingPolicy = auditoriumSeatPricingPolicy);
  }

  changeAuditoriumSeat($event: AuditoriumSeatRequest) {
    if (this.auditoriumSeatPricingPolicy) {
      $event.pricingPolicyDisplayPosition = this.auditoriumSeatPricingPolicy.displayPosition;
    } else {
      $event.status = $event.status === AuditoriumSeatStatus.UNAVAILABLE
        ? AuditoriumSeatStatus.AVAILABLE
        : AuditoriumSeatStatus.UNAVAILABLE;
    }
  }

  trackAuditoriumSeat(index: number, element: AuditoriumSeatRequest) {
    return this.auditoriumPart
      ? element.rowPosition * this.auditoriumPart.dimension.columns + element.columnPosition
      : index;
  }
}
