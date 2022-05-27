import { Component } from '@angular/core';
import { RoutingService } from '@core/services/routing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin-auditorium-list',
  templateUrl: './auditorium-list.component.html',
  styleUrls: ['./auditorium-list.component.scss'],
})
export class AuditoriumListComponent {

  constructor(private routingService: RoutingService, private route: ActivatedRoute) {
  }

  redirectToCreate() {
    this.routingService.redirectToSibling('create', this.route);
  }
}
