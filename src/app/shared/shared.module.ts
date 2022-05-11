import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';


@NgModule({
  declarations: [
    StepperComponent,
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
  ],
  exports: [
    StepperComponent,
  ],
})
export class SharedModule {
}
