import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { Auditorium } from '../../models/auditorium.model';
import { AuditoriumService } from '../../services/auditorium.service';

@Component({
  selector: 'admin-auditorium-seats-step',
  templateUrl: './auditorium-seats-step.component.html',
  styleUrls: ['./auditorium-seats-step.component.scss'],
})
export class AuditoriumSeatsStepComponent implements OnInit, OnDestroy {

  @Input() auditorium$: Observable<Auditorium> | undefined;

  public auditorium: Auditorium | undefined;

  private componentDestroyed$: Subject<boolean> = new Subject();

  constructor(private auditoriumService: AuditoriumService) {
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

  public createAuditorium(): void {
    if (this.auditorium) {
      this.auditoriumService.createAuditorium(this.auditorium)
        .pipe(
          take(1),
        )
        .subscribe();
    }
  }
}
