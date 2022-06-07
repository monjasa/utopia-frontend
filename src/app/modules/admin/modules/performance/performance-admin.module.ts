import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceAdminRoutingModule } from './performance-admin-routing.module';
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
    PerformanceAdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PerformanceAdminModule {
}
