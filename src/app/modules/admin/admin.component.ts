import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  public idToken: string | null | undefined;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getIdToken()
      .subscribe((idToken: string | null) => this.idToken = idToken)
  }

  signOut() {
    void this.router.navigate(['/auth/sign-out']);
  }
}
