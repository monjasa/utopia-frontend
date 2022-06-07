import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminFeaturesComponent } from './components/admin-features/admin-features.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'auditoriums',
        loadChildren: () => import('./modules/auditorium/auditorium-admin.module').then(m => m.AuditoriumAdminModule),
      },
      {
        path: 'performances',
        loadChildren: () => import('./modules/performance/performance-admin.module').then(m => m.PerformanceAdminModule),
      },
      {
        path: 'events',
        loadChildren: () => import('./modules/event/event-admin.module').then(m => m.EventAdminModule),
      },
      {
        path: '',
        component: AdminFeaturesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
