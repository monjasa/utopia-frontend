import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: unknown) => {
          if (error instanceof HttpErrorResponse) {
            this.handleHttpErrorResponse(error);
          }
          return throwError(error);
        }),
      );
  }

  private handleHttpErrorResponse(error: HttpErrorResponse) {
    switch (error.status) {
      case HttpStatusCode.Unauthorized:
        void this.router.navigate(['/auth/sign-in']);
        break;
      case HttpStatusCode.Forbidden:
        void this.router.navigate(['/auth/forbidden']);
        break;
    }
  }
}
