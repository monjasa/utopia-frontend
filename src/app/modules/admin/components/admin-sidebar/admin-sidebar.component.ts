import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent implements OnInit {

  public user: User | null | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUser()
      .subscribe((user: User | null) => this.user = user);
  }
}
