import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'admin-auditorium',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.scss'],
})
export class AuditoriumComponent {

  @Input()
  public auditoriumForm: FormGroup | undefined;

}
