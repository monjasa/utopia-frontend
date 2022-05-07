import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    ...canActivate(() => redirectLoggedInTo(['admin'])),
  },
  {
    path: 'sign-out',
    component: SignOutComponent,
    ...canActivate(() => redirectUnauthorizedTo(['sign-in'])),
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
    ...canActivate(() => redirectUnauthorizedTo(['sign-in'])),
  },
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
