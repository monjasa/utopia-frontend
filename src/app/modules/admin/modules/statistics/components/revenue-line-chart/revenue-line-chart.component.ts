import { Component, Input } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'admin-revenue-line-chart',
  templateUrl: './revenue-line-chart.component.html',
  styleUrls: ['./revenue-line-chart.component.scss'],
})
export class RevenueLineChartComponent {

  @Input() public data: object | undefined;

  public get legendPosition(): typeof LegendPosition {
    return LegendPosition;
  }
}
