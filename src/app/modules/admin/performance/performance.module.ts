import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceListComponent } from './components/performance-list/performance-list.component';
import { PerformanceFormComponent } from './components/performance-form/performance-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PerformanceListComponent,
    PerformanceFormComponent,
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PerformanceModule {
}
