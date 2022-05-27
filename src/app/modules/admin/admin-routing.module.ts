import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'auditorium',
        loadChildren: () => import('./auditorium/auditorium.module').then(m => m.AuditoriumModule),
      },
      {
        path: 'performance',
        loadChildren: () => import('./performance/performance.module').then(m => m.PerformanceModule),
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
