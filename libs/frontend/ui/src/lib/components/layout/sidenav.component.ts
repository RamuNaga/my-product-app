import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTES, MaterialModule } from '@my-product-app/frontend-shared';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-sidenav',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  routes = APP_ROUTES;
}
