import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss'],
})
export class OverviewCardComponent {

  @Input() public iconClass: string = '';

}
