import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingService } from '@core/services/routing.service';

@Component({
  selector: 'admin-performance-list',
  templateUrl: './performance-list.component.html',
  styleUrls: ['./performance-list.component.scss'],
})
export class PerformanceListComponent {

  constructor(private routingService: RoutingService, private route: ActivatedRoute) {
  }

  redirectToCreate() {
    this.routingService.redirectToSibling('create', this.route);
  }
}
