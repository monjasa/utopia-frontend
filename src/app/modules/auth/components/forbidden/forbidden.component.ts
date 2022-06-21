import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'auth-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss'],
})
export class ForbiddenComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  signOut() {
    this.authService.signOut()
      .then(() => this.router.navigate(['/']));
  }
}
