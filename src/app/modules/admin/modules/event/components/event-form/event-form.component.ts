import { Component, OnInit } from '@angular/core';
import { PerformanceService } from '@core/services/performance/performance.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditoriumService } from '@core/services/auditorium/auditorium.service';
import { EventService } from '@core/services/event/event.service';
import { PerformanceItem } from '@shared/models/performance/performance-item.model';
import { AuditoriumItem } from '@shared/models/auditorium/auditorium-item.model';
import { AlertService } from '@core/services/common/alert.service';
import { EventRequest } from '@shared/models/event/event-request.model';

@Component({
  selector: 'admin-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {

  public performances: PerformanceItem[] = [];
  public auditoriums: AuditoriumItem[] = [];

  public form: FormGroup;

  private minDate: Date;
  private maxDate: Date;

  constructor(
    private eventService: EventService,
    private performanceService: PerformanceService,
    private auditoriumService: AuditoriumService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    [this.minDate, this.maxDate] = this.buildDateConstraint();
    this.form = this.buildEventForm();
    console.log(this.minDateString);
  }

  ngOnInit(): void {
    this.performanceService.getPerformanceItems()
      .subscribe((performances: PerformanceItem[]) => {
        this.performances = performances;
        this.selectPerformance(this.performances[0]);
      });
    this.auditoriumService.getAuditoriumItems()
      .subscribe((auditoriums: AuditoriumItem[]) => {
        this.auditoriums = auditoriums;
        this.selectAuditorium(this.auditoriums[0]);
      });

    this.form.get('startedAt')?.valueChanges
      .subscribe((startedAt: Date) => console.log(startedAt));
  }

  submit(): void {
    if (!this.form.valid) {
      this.alertService.showWarningToast('Неможливо створити подію через некоректне заповнення значень');
      return;
    }

    const event = this.buildEventRequest();
    this.eventService.createEvent(event)
      .subscribe(() => {
        this.router.navigate(['../all'], { relativeTo: this.route })
          .then(() => this.alertService.showSuccessToast('Подію успішно створено'));
      });
  }

  get minDateString(): string {
    return this.minDate.toISOString()
      .replace(/:00.000Z/, '');
  }

  get maxDateString(): string {
    return this.maxDate.toISOString()
      .replace(/:00.000Z/, '');
  }

  private buildEventForm(): FormGroup {
    return this.fb.group({
      startedAt: [this.minDateString, Validators.required],
      performance: [undefined, Validators.required],
      auditorium: [undefined, Validators.required],
    });
  }

  private selectPerformance(performance: PerformanceItem | null): void {
    this.form.get('performance')?.patchValue(performance);
  }

  private selectAuditorium(auditorium: AuditoriumItem | null): void {
    this.form.get('auditorium')?.patchValue(auditorium);
  }

  private buildDateConstraint = (): [Date, Date] => {
    const currentDate = new Date();
    currentDate.setSeconds(0, 0);
    const futureDate = new Date();
    futureDate.setFullYear(currentDate.getFullYear() + 10);
    futureDate.setSeconds(0, 0);
    return [currentDate, futureDate];
  };

  private buildEventRequest(): EventRequest {
    const {
      startedAt,
      performance,
      auditorium,
    } = this.form.value;
    return {
      startedAt,
      performanceId: performance.id,
      auditoriumId: auditorium.id,
    };
  }
}
