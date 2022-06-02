import { Component, OnInit } from '@angular/core';
import { StorageService } from '@core/services/common/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerformanceService } from '@core/services/performance/performance.service';
import { PerformanceGenreService } from '@core/services/performance/performance-genre.service';
import { PerformanceGenre } from '@shared/models/performance/performance-genre.model';
import { PerformanceRequest } from '@shared/models/performance/performance-request.model';
import { from, switchMap, zip } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { serialize } from 'tinyduration';
import { FilePreview } from '@shared/models/common/file-preview.model';
import { AlertService } from '@core/services/common/alert.service';

@Component({
  selector: 'admin-performance-form',
  templateUrl: './performance-form.component.html',
  styleUrls: ['./performance-form.component.scss'],
})
export class PerformanceFormComponent implements OnInit {

  public posterPreview: FilePreview | undefined;
  public backdropPreview: FilePreview | undefined;

  public genres: PerformanceGenre[] = [];

  public form: FormGroup;

  constructor(
    private performanceService: PerformanceService,
    private performanceGenreService: PerformanceGenreService,
    private storageService: StorageService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.form = this.buildPerformanceForm();
  }

  ngOnInit(): void {
    this.performanceGenreService.getPerformanceGenres()
      .subscribe((performanceGenres: PerformanceGenre[]) => {
        this.genres = performanceGenres;
        this.selectGenre(this.genres[0]);
      });
  }

  submit(): void {
    if (!this.form.valid) {
      return;
    }

    const {
      poster,
      backdrop,
    } = this.form.value;

    zip(
      from(this.storageService.uploadImage(poster)),
      from(this.storageService.uploadImage(backdrop)),
    ).pipe(
      switchMap(([posterUrl, backdropUrl]: [string, string]) => {
        const performance = this.buildPerformanceRequest(posterUrl, backdropUrl);
        return this.performanceService.createPerformance(performance);
      }),
    ).subscribe(() => {
      this.router.navigate(['../all'], { relativeTo: this.route })
        .then(() => this.alertService.showSuccessToast('Виставу успішно створено'));
    });
  }

  changePosterPreview($event: FilePreview): void {
    this.posterPreview = $event;
  }

  changeBackdropPreview($event: FilePreview): void {
    this.backdropPreview = $event;
  }

  private buildPerformanceForm(): FormGroup {
    return this.fb.group({
      title: [undefined, Validators.required],
      description: [undefined],
      duration: [undefined],
      genre: [undefined, Validators.required],
      poster: [undefined, Validators.required],
      backdrop: [undefined, Validators.required],
    });
  }

  private selectGenre(genre: PerformanceGenre | null) {
    this.form.get('genre')?.patchValue(genre);
  }

  private buildPerformanceRequest(posterUrl: string, backdropUrl: string): PerformanceRequest {
    const {
      title,
      description,
      duration,
      genre,
    } = this.form.value;
    return {
      title,
      description,
      duration: serialize({ minutes: duration }),
      genreId: genre.id,
      attachments: {
        posterUrl,
        backdropUrl,
      },
    };
  }
}
