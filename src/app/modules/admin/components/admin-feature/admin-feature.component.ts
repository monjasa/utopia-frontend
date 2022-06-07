import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-feature',
  templateUrl: './admin-feature.component.html',
  styleUrls: ['./admin-feature.component.scss'],
})
export class AdminFeatureComponent {

  @Input() public iconClass: string = '';

  @Input() public routerLinkCommand: string = '';

}
