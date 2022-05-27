import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StepperComponent,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
    FormsModule,
  ],
  exports: [
    StepperComponent,
    FileUploadComponent,
  ],
})
export class SharedModule {
}
