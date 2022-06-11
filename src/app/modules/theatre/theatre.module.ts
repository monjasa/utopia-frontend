import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheatreRoutingModule } from './theatre-routing.module';
import { TheatreComponent } from './theatre.component';


@NgModule({
  declarations: [
    TheatreComponent,
  ],
  imports: [
    CommonModule,
    TheatreRoutingModule,
  ],
})
export class TheatreModule {
}
