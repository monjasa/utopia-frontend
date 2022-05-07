import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    ForbiddenComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {
}
