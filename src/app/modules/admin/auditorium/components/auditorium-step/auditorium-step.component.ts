import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'admin-auditorium-step',
  templateUrl: './auditorium-step.component.html',
  styleUrls: ['./auditorium-step.component.scss'],
})
export class AuditoriumStepComponent {

  @Input() auditoriumForm: FormGroup | undefined;

}
