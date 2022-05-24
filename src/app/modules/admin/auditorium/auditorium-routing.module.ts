import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditoriumStepperComponent } from './components/auditorium-stepper/auditorium-stepper.component';

const routes: Routes = [
  {
    path: 'create',
    component: AuditoriumStepperComponent,
  },
  {
    path: '',
    redirectTo: 'create',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditoriumRoutingModule {
}
