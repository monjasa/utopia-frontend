import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-overview-cards',
  templateUrl: './overview-cards.component.html',
  styleUrls: ['./overview-cards.component.scss'],
})
export class OverviewCardsComponent {

  @Input() public data: any | undefined;

}
