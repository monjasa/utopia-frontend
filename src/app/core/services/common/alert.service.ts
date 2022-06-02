import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AlertToastComponent } from '@core/components/alert-toast/alert-toast.component';
import { IndividualConfig } from 'ngx-toastr/toastr/toastr-config';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  constructor(private toastrService: ToastrService) {
  }

  public showSuccessToast(message: string): void {
    const activeToast = this.toastrService.show(message, undefined, this.buildToastOverride());
    const componentInstance = activeToast.toastRef.componentInstance as AlertToastComponent;
    componentInstance.contextualClass = 'alert-success';
  }

  public showWarningToast(message: string): void {
    const activeToast = this.toastrService.show(message, undefined, this.buildToastOverride());
    const componentInstance = activeToast.toastRef.componentInstance as AlertToastComponent;
    componentInstance.contextualClass = 'alert-warning';
  }

  public showErrorToast(message: string): void {
    const activeToast = this.toastrService.show(message, undefined, this.buildToastOverride());
    const componentInstance = activeToast.toastRef.componentInstance as AlertToastComponent;
    componentInstance.contextualClass = 'alert-danger';
  }

  private buildToastOverride = (): Partial<IndividualConfig> => ({
    toastComponent: AlertToastComponent,
    toastClass: undefined,
    positionClass: 'toast-bottom-right',
  });
}
