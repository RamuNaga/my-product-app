import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@my-product-app/frontend-shared';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'lib-header',
  imports: [CommonModule, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() drawer?: MatSidenav;
}
