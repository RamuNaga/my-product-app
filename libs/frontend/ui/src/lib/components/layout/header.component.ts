import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  signal,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LoginStore,
  LoginUser as User,
  MaterialModule,
} from '@my-product-app/frontend-shared';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() drawer?: MatSidenav;

  private loginStore = inject(LoginStore);
  private router = inject(Router);

  user = signal<User | null>(null);

  ngOnInit() {
    // Get user details from LoginStore or fallback to localStorage
    const loginResponse = this.loginStore.loginResponse();
    if (loginResponse) {
      this.user.set(loginResponse.user);
    } else {
      const localUser = localStorage.getItem('user');
      if (localUser) {
        this.user.set(JSON.parse(localUser));
      }
    }
  }

  logout() {
    this.loginStore.logout();
    this.router.navigate(['/login']);
  }
  onMenuClosed() {
    console.log('Account menu closed');
    // Add any custom logic here if needed
  }
}
