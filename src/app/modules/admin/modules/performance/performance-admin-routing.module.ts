import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceListComponent } from './components/performance-list/performance-list.component';
import { PerformanceFormComponent } from './components/performance-form/performance-form.component';

const routes: Routes = [
  {
    path: 'all',
    component: PerformanceListComponent,
  },
  {
    path: 'create',
    component: PerformanceFormComponent,
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
export class PerformanceAdminRoutingModule {
}
