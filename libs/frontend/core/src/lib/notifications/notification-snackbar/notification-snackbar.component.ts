import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

export interface NotificationSnackbarData {
  type: 'error' | 'success';
  message: string;
}

@Component({
  selector: 'core-notification-snackbar',
  standalone: true,
  imports: [MatIconModule, NgClass],
  template: `
    <div class="snackbar-container" [ngClass]="data.type">
      <mat-icon *ngIf="data.type === 'error'">error</mat-icon>
      <mat-icon *ngIf="data.type === 'success'">check_circle</mat-icon>
      <span>{{ data.message }}</span>
    </div>
  `,
  styles: [
    `
      .snackbar-container {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        padding: 8px 12px;
        border-radius: 4px;
      }
      .error {
        color: #fff;
        background-color: #d32f2f;
      }
      .success {
        color: #fff;
        background-color: #388e3c;
      }
    `,
  ],
})
export class NotificationSnackbarComponent {
  public data = inject<NotificationSnackbarData>(MAT_SNACK_BAR_DATA);
}
