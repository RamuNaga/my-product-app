import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    let cloned = req;
    if (token) {
      cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      console.log('@28 httpinterceptor req', cloned, req);
    }

    // Optional: start global loading spinner here
    // this.loaderService.setLoading(true);

    return next.handle(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            console.error(
              'Bad Request:',
              error.error?.message || error.message
            );
            break;
          case 401:
            console.warn('Unauthorized - Redirecting to login');
            // Optionally redirect to login
            break;
          case 403:
            console.warn('Forbidden');
            break;
          case 404:
            console.error('Not Found:', error.message);
            break;
          case 409:
            console.error(
              'Product code already exists. Please use a different one:',
              error.message
            );
            alert('Product code already exists. Please use a different one.');
            break;
          case 500:
            console.error('Server Error:', error.message);
            break;
          default:
            console.error('Unhandled Error:', error.message);
            break;
        }

        // Optional: show toast/notification service
        // this.notificationService.showError('Something went wrong');

        return throwError(() => error);
      }),
      finalize(() => {
        // Optional: stop loading spinner here
        // this.loaderService.setLoading(false);
      })
    );
  }
}
