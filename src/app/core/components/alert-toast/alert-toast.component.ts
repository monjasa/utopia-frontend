import { Component, Input } from '@angular/core';
import { Toast } from 'ngx-toastr';

@Component({
  selector: 'core-alert-toast',
  templateUrl: './alert-toast.component.html',
  styleUrls: ['./alert-toast.component.scss']
})
export class AlertToastComponent extends Toast {

  @Input() public contextualClass: string | undefined;

}
