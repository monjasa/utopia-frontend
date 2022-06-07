import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditoriumStepperComponent } from './components/auditorium-stepper/auditorium-stepper.component';
import { AuditoriumListComponent } from './components/auditorium-list/auditorium-list.component';

const routes: Routes = [
  {
    path: 'all',
    component: AuditoriumListComponent,
  },
  {
    path: 'create',
    component: AuditoriumStepperComponent,
  },
  {
    path: '',
    redirectTo: 'all',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditoriumAdminRoutingModule {
}
