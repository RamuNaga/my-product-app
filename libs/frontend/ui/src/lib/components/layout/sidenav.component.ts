import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-sidenav',
  imports: [CommonModule, MaterialModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {}
