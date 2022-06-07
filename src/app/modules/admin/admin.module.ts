import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '@shared/shared.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { PerformanceAdminModule } from './modules/performance/performance-admin.module';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminFeaturesComponent } from './components/admin-features/admin-features.component';
import { AdminFeatureComponent } from './components/admin-feature/admin-feature.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminSidebarComponent,
    AdminFeaturesComponent,
    AdminFeatureComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkStepperModule,
    AdminRoutingModule,
    SharedModule,
    PerformanceAdminModule,
  ],
})
export class AdminModule {
}
