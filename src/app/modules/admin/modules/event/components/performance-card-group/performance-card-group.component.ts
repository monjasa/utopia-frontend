import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PerformanceItem } from '@shared/models/performance/performance-item.model';

@Component({
  selector: 'admin-performance-card-group',
  templateUrl: './performance-card-group.component.html',
  styleUrls: ['./performance-card-group.component.scss'],
})
export class PerformanceCardGroupComponent {

  @Input() public performances: PerformanceItem[] = [];

  @Output() public performanceSelect = new EventEmitter<PerformanceItem>();

  public selectedPerformance: PerformanceItem | undefined;

  performanceSelected(performance: PerformanceItem): void {
    this.selectedPerformance = performance;
    this.performanceSelect.emit(this.selectedPerformance);
  }
}
