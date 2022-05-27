import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '@shared/shared.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { PerformanceModule } from './performance/performance.module';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkStepperModule,
    AdminRoutingModule,
    SharedModule,
    PerformanceModule,
  ],
})
export class AdminModule {
}
