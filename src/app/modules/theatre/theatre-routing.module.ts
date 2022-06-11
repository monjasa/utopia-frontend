import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatreComponent } from './theatre.component';

const routes: Routes = [
  {
    path: '',
    component: TheatreComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'events',
        loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheatreRoutingModule {
}
