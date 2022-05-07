import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '@environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '@core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
