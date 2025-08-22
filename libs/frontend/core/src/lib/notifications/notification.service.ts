import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationSnackbarComponent } from './notification-snackbar/notification-snackbar.component';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private snackBar = inject(MatSnackBar);

  showNotification(message: string, type: 'success' | 'error') {
    this.snackBar.openFromComponent(NotificationSnackbarComponent, {
      data: { message, type },
      duration: 4000,
      horizontalPosition: 'center', // 'start' | 'center' | 'end' | 'left' | 'right'
      verticalPosition: 'bottom', // 'top' | 'bottom'
      panelClass: type, // Optional: to apply custom CSS
    });
  }
}
