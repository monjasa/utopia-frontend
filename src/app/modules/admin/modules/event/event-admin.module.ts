import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventAdminRoutingModule } from './event-admin-routing.module';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerformanceCardGroupComponent } from './components/performance-card-group/performance-card-group.component';


@NgModule({
  declarations: [
    EventFormComponent,
    EventListComponent,
    PerformanceCardGroupComponent,
  ],
  imports: [
    CommonModule,
    EventAdminRoutingModule,
    ReactiveFormsModule,
  ],
})
export class EventAdminModule {
}
