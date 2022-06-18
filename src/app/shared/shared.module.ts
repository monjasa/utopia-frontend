import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';
import { AuditoriumDimensionGridTemplatePipe } from './pipes/auditorium-dimension-grid-template.pipe';
import { AuditoriumSeatColorPipe } from '@shared/pipes/auditorium-seat-color.pipe';
import { AuditoriumSeatStyleClassesPipe } from './pipes/auditorium-seat-style-classes.pipe';
import { QRCodeModule } from 'angularx-qrcode';
import { CountdownFractionComponent } from './components/countdown-fraction/countdown-fraction.component';
import { CountdownModule } from 'ngx-countdown';


@NgModule({
  declarations: [
    StepperComponent,
    FileUploadComponent,
    AuditoriumDimensionGridTemplatePipe,
    AuditoriumSeatColorPipe,
    AuditoriumSeatStyleClassesPipe,
    CountdownFractionComponent,
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
    FormsModule,
    QRCodeModule,
    CountdownModule,
  ],
  exports: [
    QRCodeModule,
    StepperComponent,
    FileUploadComponent,
    AuditoriumDimensionGridTemplatePipe,
    AuditoriumSeatColorPipe,
    AuditoriumSeatStyleClassesPipe,
    CountdownFractionComponent,
  ],
})
export class SharedModule {
}
