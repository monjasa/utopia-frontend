import { Component, OnInit } from '@angular/core';
import { AuditoriumService } from '@core/services/auditorium/auditorium.service';
import { AuditoriumItem } from '@shared/models/auditorium/auditorium-item.model';

@Component({
  selector: 'admin-auditorium-list',
  templateUrl: './auditorium-list.component.html',
  styleUrls: ['./auditorium-list.component.scss'],
})
export class AuditoriumListComponent implements OnInit {

  public auditoriums: AuditoriumItem[] = [];

  constructor(private auditoriumService: AuditoriumService) {
  }

  ngOnInit(): void {
    this.auditoriumService.getAuditoriumItems()
      .subscribe((auditoriums: AuditoriumItem[]) => this.auditoriums = auditoriums);
  }
}
