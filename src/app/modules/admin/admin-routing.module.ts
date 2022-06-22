import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminFeaturesComponent } from './components/admin-features/admin-features.component';
import { AuthPipe, canActivate, customClaims } from '@angular/fire/auth-guard';
import { map, pipe } from 'rxjs';

const scopeAuthPipe = pipe(customClaims, map(claims => claims.scope ? true : '/auth/forbidden')) as AuthPipe;

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
        path: 'employees',
        loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule),
      },
      {
        path: 'statistics',
        loadChildren: () => import('./modules/statistics/statistics.module').then(m => m.StatisticsModule),
      },
      {
        path: '',
        component: AdminFeaturesComponent,
      },
    ],
    ...canActivate(() => scopeAuthPipe),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
