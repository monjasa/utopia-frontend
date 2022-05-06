import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Data } from '../../../admin/models/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  public data: Data | undefined;

  constructor(private dataService: DataService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe(data => this.data = data);
  }

  async signIn(): Promise<void> {
    await this.authService.signIn();
  }
}
