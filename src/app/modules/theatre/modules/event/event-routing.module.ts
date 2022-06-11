import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventStepperComponent } from './components/event-stepper/event-stepper.component';

const routes: Routes = [
  {
    path: ':id',
    component: EventStepperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {
}
