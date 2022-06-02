import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of, Subject, takeUntil } from 'rxjs';
import { FilePreview } from '@shared/models/common/file-preview.model';

@Component({
  selector: 'shared-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true,
    },
  ],
})
export class FileUploadComponent implements ControlValueAccessor, OnInit, OnDestroy {

  @Input() public fileType: string | undefined;

  @Output() public filePreviewChange = new EventEmitter<FilePreview>();

  private onChange: Function | undefined;

  private file: File | null | undefined;
  private filePreview: FilePreview | undefined;
  private fileReader: FileReader = new FileReader();

  private componentDestroyed$: Subject<boolean> = new Subject();

  constructor() {
    this.fileReader.onload = ($event: ProgressEvent<FileReader>) => {
      this.filePreview = $event.target?.result;
      this.filePreviewChange.emit(this.filePreview);
    };
  }

  ngOnInit(): void {
    of(this.filePreview)
      .pipe(
        takeUntil(this.componentDestroyed$),
      ).subscribe((filePreview: FilePreview | undefined) => this.filePreviewChange.emit(filePreview));
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  @HostListener('change', ['$event.target.files[0]'])
  fileChanged(file: File): void {
    this.file = file;
    this.onChange?.(this.file);
    this.readFile(this.file);
  }

  writeValue(obj: any): void {
    this.file = null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  private readFile(file: File): void {
    if (file) {
      this.fileReader.readAsDataURL(file);
    } else {
      this.filePreviewChange.emit(null);
    }
  }
}
