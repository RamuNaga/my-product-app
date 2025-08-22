import { inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { NotificationService } from '../notifications/notification.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  readonly notificationService = inject(NotificationService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');

    let cloned = req;
    if (token) {
      cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(cloned).pipe(
      map((event: any) => {
        // Check if GraphQL response has "errors"
        console.log(event);
        if (event?.body?.errors?.length) {
          const graphQLError = event.body.errors[0];
          this.notificationService.showNotification(
            graphQLError.message,
            'error'
          );
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Something went wrong';

        switch (error.status) {
          case 400:
            errorMessage =
              'Bad Request: ' + (error.error?.message || error.message);
            break;
          case 401:
            errorMessage = 'Unauthorized - Please login again';
            break;
          case 403:
            errorMessage = 'Forbidden - You do not have access';
            break;
          case 404:
            errorMessage = 'Not Found: ' + error.message;
            break;
          case 409:
            errorMessage =
              'Product code already exists. Please use a different one.';
            break;
          case 500:
            errorMessage = 'Server Error: ' + error.message;
            break;
          default:
            errorMessage = error.message || 'Unknown error occurred';
        }

        this.notificationService.showNotification(errorMessage, 'error');

        return throwError(() => error);
      }),
      finalize(() => {
        // Optional: stop spinner
      })
    );
  }
}
