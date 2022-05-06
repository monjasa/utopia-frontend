import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.getIdToken()
      .pipe(
        switchMap((idToken: string | null) => {
          if (idToken) {
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${idToken}`,
              },
            });
          }
          return next.handle(request);
        }),
      );
  }
}
