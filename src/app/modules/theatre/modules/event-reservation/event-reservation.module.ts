import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventReservationRoutingModule } from './event-reservation-routing.module';
import { EventReservationComponent } from './components/event-reservation/event-reservation.component';
import { EventReservationCallbackComponent } from './components/event-reservation-callback/event-reservation-callback.component';
import { SharedModule } from '@shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    EventReservationComponent,
    EventReservationCallbackComponent,
  ],
  imports: [
    CommonModule,
    EventReservationRoutingModule,
    SharedModule,
    SwiperModule,
  ],
})
export class EventReservationModule {
}
