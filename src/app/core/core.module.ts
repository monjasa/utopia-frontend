import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlertToastComponent } from './components/alert-toast/alert-toast.component';


@NgModule({
  declarations: [AlertToastComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  entryComponents: [AlertToastComponent],
})
export class CoreModule {
}
