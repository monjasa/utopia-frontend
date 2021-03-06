import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  constructor(private authService: AuthService) {
  }

  signIn() {
    void this.authService.signIn();
  }
}
