import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'lib-ui-material-loader',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: `
    <div class="loader-overlay">
      <mat-progress-spinner
        mode="indeterminate"
        diameter="50"
        color="primary"
      ></mat-progress-spinner>
    </div>
  `,
  styles: [
    `
      .loader-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
    `,
  ],
})
export class MaterialLoaderComponent {}
