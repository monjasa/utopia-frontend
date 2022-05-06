import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './services/admin.service';
import { Data } from './models/data.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  public data: Data | undefined;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit(): void {
    this.adminService.getData()
      .subscribe(data => this.data = data);
  }

  async signOut(): Promise<void> {
    await this.router.navigate(['/auth/sign-out']);
  }
}
