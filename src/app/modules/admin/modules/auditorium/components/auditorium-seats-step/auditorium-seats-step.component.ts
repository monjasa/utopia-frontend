import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuditoriumService } from '@core/services/auditorium/auditorium.service';
import { Auditorium } from '@shared/models/auditorium/auditorium.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'admin-auditorium-seats-step',
  templateUrl: './auditorium-seats-step.component.html',
  styleUrls: ['./auditorium-seats-step.component.scss'],
})
export class AuditoriumSeatsStepComponent implements OnInit, OnDestroy {

  @Input() auditorium$: Observable<Auditorium> | undefined;

  public auditorium: Auditorium | undefined;

  private componentDestroyed$: Subject<boolean> = new Subject();

  constructor(
    private auditoriumService: AuditoriumService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    if (this.auditorium$) {
      this.auditorium$
        .pipe(
          takeUntil(this.componentDestroyed$),
        ).subscribe((auditorium: Auditorium) => this.auditorium = auditorium);
    }
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  submit(): void {
    if (this.auditorium) {
      this.auditoriumService.createAuditorium(this.auditorium)
        .subscribe(() => this.router.navigate(['../all'], { relativeTo: this.route }));
    }
  }
}
