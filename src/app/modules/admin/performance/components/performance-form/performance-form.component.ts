import { Component, OnInit } from '@angular/core';
import { StorageService } from '@core/services/storage.service';
import { RoutingService } from '@core/services/routing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerformanceGenreService } from '../../services/performance-genre.service';
import { PerformanceGenre } from '../../models/performance-genre.model';
import { PerformanceService } from '../../services/performance.service';
import { PerformanceAttachments } from '../../models/performance-attachments.model';
import { PerformanceRequest } from '../../models/performance-request.model';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { serialize } from 'tinyduration';
import { FilePreview } from '../../models/types/file-preview.type';

@Component({
  selector: 'admin-performance-form',
  templateUrl: './performance-form.component.html',
  styleUrls: ['./performance-form.component.scss'],
})
export class PerformanceFormComponent implements OnInit {

  public posterPreview: FilePreview | undefined;
  public backdropPreview: FilePreview | undefined;

  public form: FormGroup;

  public genres: PerformanceGenre[] | undefined;

  constructor(
    private performanceService: PerformanceService,
    private performanceGenreService: PerformanceGenreService,
    private storageService: StorageService,
    private routingService: RoutingService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.form = fb.group({
      title: [undefined, Validators.required],
      description: [undefined],
      duration: [undefined],
      genre: [undefined, Validators.required],
      poster: [undefined],
      backdrop: [undefined],
    });
  }

  ngOnInit(): void {
    this.performanceGenreService.getAllPerformanceGenres()
      .subscribe((performanceGenres: PerformanceGenre[]) => {
        this.genres = performanceGenres;
        this.selectGenre(this.genres[0]);
      });
  }

  uploadFile(file: File): Promise<string> {
    return this.storageService.uploadImage(file);
  }

  async submit(): Promise<void> {
    if (!this.form.valid) {
      return;
    }

    const {
      title,
      description,
      duration,
      genre,
      poster,
      backdrop,
    } = this.form.value;

    const attachments: PerformanceAttachments = {
      posterUrl: await this.uploadFile(poster),
      backdropUrl: await this.uploadFile(backdrop),
    };

    const performance: PerformanceRequest = {
      title,
      description,
      duration: serialize({ minutes: duration }),
      genreId: genre.id,
      attachments,
    };

    this.performanceService.createPerformance(performance)
      .pipe(
        take(1),
      ).subscribe(() => this.routingService.redirectToSibling('all', this.route));
  }

  changePosterPreview($event: FilePreview): void {
    this.posterPreview = $event;
  }

  changeBackdropPreview($event: FilePreview): void {
    this.backdropPreview = $event;
  }

  private selectGenre(genre: PerformanceGenre | null) {
    this.form.get('genre')?.patchValue(genre);
  }
}
