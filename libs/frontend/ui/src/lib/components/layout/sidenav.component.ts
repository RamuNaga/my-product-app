import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTES, MaterialModule } from '@my-product-app/frontend-shared';
import { Router, RouterModule } from '@angular/router';

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
  readonly router = inject(Router);
  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }
}
