import { Component, Input } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'admin-revenue-pie-chart',
  templateUrl: './revenue-pie-chart.component.html',
  styleUrls: ['./revenue-pie-chart.component.scss'],
})
export class RevenuePieChartComponent {

  @Input() public data: object | undefined;

  public get legendPosition(): typeof LegendPosition {
    return LegendPosition;
  }
}
