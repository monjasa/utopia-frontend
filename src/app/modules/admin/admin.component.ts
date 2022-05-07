import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@core/services/data.service';
import { Data } from '@shared/models/data.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  public data: Data | undefined;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe(data => this.data = data);
  }

  signOut() {
    void this.router.navigate(['/auth/sign-out']);
  }
}
