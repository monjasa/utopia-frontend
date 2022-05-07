import { Component, OnInit } from '@angular/core';
import { Data } from '@shared/models/data.model';
import { DataService } from '@core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public data: Data | undefined;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe(data => this.data = data);
  }
}
