import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';
import { AuditoriumDimensionGridTemplatePipe } from './pipes/auditorium-dimension-grid-template.pipe';
import { AuditoriumSeatColorPipe } from '@shared/pipes/auditorium-seat-color.pipe';
import { AuditoriumSeatStyleClassesPipe } from './pipes/auditorium-seat-style-classes.pipe';


@NgModule({
  declarations: [
    StepperComponent,
    FileUploadComponent,
    AuditoriumDimensionGridTemplatePipe,
    AuditoriumSeatColorPipe,
    AuditoriumSeatStyleClassesPipe,
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
    FormsModule,
  ],
  exports: [
    StepperComponent,
    FileUploadComponent,
    AuditoriumDimensionGridTemplatePipe,
    AuditoriumSeatColorPipe,
    AuditoriumSeatStyleClassesPipe,
  ],
})
export class SharedModule {
}
