import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheatreRoutingModule } from './theatre-routing.module';
import { TheatreComponent } from './theatre.component';
import { EventReservationModule } from './modules/event-reservation/event-reservation.module';


@NgModule({
  declarations: [
    TheatreComponent,
  ],
  imports: [
    CommonModule,
    TheatreRoutingModule,
    EventReservationModule,
  ],
})
export class TheatreModule {
}
