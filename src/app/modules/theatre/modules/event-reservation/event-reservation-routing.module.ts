import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventReservationComponent } from './components/event-reservation/event-reservation.component';
import { EventReservationCallbackComponent } from './components/event-reservation-callback/event-reservation-callback.component';

const routes: Routes = [
  {
    path: 'callback',
    component: EventReservationCallbackComponent,
  },
  {
    path: ':uuid',
    component: EventReservationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventReservationRoutingModule {
}
