import { Component, Input } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'admin-performances-bar-chart',
  templateUrl: './performances-bar-chart.component.html',
  styleUrls: ['./performances-bar-chart.component.scss'],
})
export class PerformancesBarChartComponent {

  @Input() public data: object | undefined;

  public get legendPosition(): typeof LegendPosition {
    return LegendPosition;
  }
}
