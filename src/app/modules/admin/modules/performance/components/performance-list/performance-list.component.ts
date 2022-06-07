import { Component, OnInit } from '@angular/core';
import { PerformanceService } from '@core/services/performance/performance.service';
import { PerformanceConcise } from '@shared/models/performance/performance-concise.model';

@Component({
  selector: 'admin-performance-list',
  templateUrl: './performance-list.component.html',
  styleUrls: ['./performance-list.component.scss'],
})
export class PerformanceListComponent implements OnInit {

  public performances: PerformanceConcise[] = [];

  constructor(private performanceService: PerformanceService) {
  }

  ngOnInit(): void {
    this.performanceService.getPerformancesConcise()
      .subscribe((performances: PerformanceConcise[]) => this.performances = performances);
  }
}
