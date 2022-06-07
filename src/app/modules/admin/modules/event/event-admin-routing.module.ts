import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventFormComponent } from './components/event-form/event-form.component';

const routes: Routes = [
  {
    path: 'all',
    component: EventListComponent,
  },
  {
    path: 'create',
    component: EventFormComponent,
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
export class EventAdminRoutingModule {
}
