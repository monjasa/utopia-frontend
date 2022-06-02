import { Component, Input } from '@angular/core';
import { AuditoriumPart } from '@shared/models/auditorium/auditorium-part.model';
import { AuditoriumSeatPricingPolicy } from '@shared/models/auditorium/auditorium-seat-pricing-policy.model';
import { AuditoriumSeatPricingPolicyService } from '@core/services/auditorium/auditorium-seat-pricing-policy.service';
import { AuditoriumSeat } from '@shared/models/auditorium/auditorium-seat.model';
import { AuditoriumSeatStatus } from '@shared/models/auditorium/enums/auditorium-seat-status.enum';

@Component({
  selector: 'admin-auditorium-part-grid',
  templateUrl: './auditorium-part-grid.component.html',
  styleUrls: ['./auditorium-part-grid.component.scss'],
})
export class AuditoriumPartGridComponent {

  @Input()
  public auditoriumPart: AuditoriumPart | undefined;

  private auditoriumSeatPricingPolicy: AuditoriumSeatPricingPolicy | null | undefined;

  constructor(private auditoriumSeatPricingPolicyService: AuditoriumSeatPricingPolicyService) {
    this.auditoriumSeatPricingPolicyService.selected$
      .subscribe((auditoriumSeatPricingPolicy: AuditoriumSeatPricingPolicy | null) => this.auditoriumSeatPricingPolicy = auditoriumSeatPricingPolicy);
  }

  changeAuditoriumSeat($event: AuditoriumSeat) {
    if (this.auditoriumSeatPricingPolicy) {
      $event.pricingPolicyDisplayPosition = this.auditoriumSeatPricingPolicy.displayPosition;
    } else {
      $event.status = $event.status === AuditoriumSeatStatus.UNAVAILABLE
        ? AuditoriumSeatStatus.AVAILABLE
        : AuditoriumSeatStatus.UNAVAILABLE;
    }
  }

  get gridTemplate(): string {
    return `repeat(${this.auditoriumPartRows}, 20px) / repeat(${this.auditoriumPartColumns}, 20px)`;
  }

  get auditoriumPartRows(): number {
    return this.auditoriumPart?.dimension.rows ?? 0;
  }

  get auditoriumPartColumns(): number {
    return this.auditoriumPart?.dimension.columns ?? 0;
  }
}
