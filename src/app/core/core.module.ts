import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlertToastComponent } from './components/alert-toast/alert-toast.component';
import { SwiperModule } from 'swiper/angular';

import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@NgModule({
  declarations: [
    AlertToastComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SwiperModule,
    ToastrModule.forRoot(),
  ],
  entryComponents: [AlertToastComponent],
})
export class CoreModule {
}
