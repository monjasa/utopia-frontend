import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuditoriumComponent } from './components/auditorium/auditorium.component';
import { SharedModule } from '@shared/shared.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { AuditoriumStepperComponent } from './components/auditorium-stepper/auditorium-stepper.component';
import { AuditoriumPartsComponent } from './components/auditorium-parts/auditorium-parts.component';
import { AuditoriumSeatsComponent } from './components/auditorium-seats/auditorium-seats.component';
import { AuditoriumPartsGridComponent } from './components/auditorium-parts-grid/auditorium-parts-grid.component';
import { AuditoriumSeatComponent } from './components/auditorium-seat/auditorium-seat.component';
import { AuditoriumPartGridComponent } from './components/auditorium-part-grid/auditorium-part-grid.component';


@NgModule({
  declarations: [
    AdminComponent,
    AuditoriumComponent,
    AuditoriumStepperComponent,
    AuditoriumPartsComponent,
    AuditoriumSeatsComponent,
    AuditoriumPartsGridComponent,
    AuditoriumSeatComponent,
    AuditoriumPartGridComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkStepperModule,
    AdminRoutingModule,
    SharedModule,
  ],
})
export class AdminModule {
}
