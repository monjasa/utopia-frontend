import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss'],
})
export class ForbiddenComponent {

  constructor(private router: Router) {
  }

  signOut() {
    void this.router.navigate(['/auth/sign-out']);
  }
}
