import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { RevenueLineChartComponent } from './components/revenue-line-chart/revenue-line-chart.component';
import { RevenuePieChartComponent } from './components/revenue-pie-chart/revenue-pie-chart.component';
import { OverviewCardsComponent } from './components/overview-cards/overview-cards.component';
import { OverviewCardComponent } from './components/overview-card/overview-card.component';
import { PerformancesBarChartComponent } from './components/performances-bar-chart/performances-bar-chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RevenueLineChartComponent,
    RevenuePieChartComponent,
    OverviewCardsComponent,
    OverviewCardComponent,
    PerformancesBarChartComponent,
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    SharedModule,
  ],
})
export class StatisticsModule {
}
