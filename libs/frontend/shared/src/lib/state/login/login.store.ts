import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@my-product-app/frontend-data-access';
import { tap, map } from 'rxjs/operators';
import { LoginResponse, LoginResult } from './login.model';

@Injectable({ providedIn: 'root' })
export class LoginStore {
  private router = inject(Router);
  private authService = inject(AuthService);

  private _loginResponse = signal<LoginResponse | null>(null);
  readonly loginResponse = computed(() => this._loginResponse());

  private _isLoading = signal(false);
  readonly isLoading = computed(() => this._isLoading());

  private _error = signal<string | null>(null);
  readonly errorMessage = computed(() => this._error());

  login(email: string, password: string) {
    this._isLoading.set(true);
    this._error.set(null);

    const loginInput = { email, password };

    this.authService
      .login({ loginInput })
      .pipe(
        map((res: any): LoginResult => {
          console.log('Raw GraphQL response:', res);

          // Access nested GraphQL data
          const loginData = res;
          console.log('loginData==', loginData);
          if (loginData?.accessToken && loginData?.user) {
            return { status: 'success', data: loginData };
          }

          return { status: 'error', message: 'Invalid response from server' };
        }),
        tap((result: LoginResult) => {
          this._isLoading.set(false);
          console.log('Processed login result:', result);

          if (result.status === 'success') {
            this._loginResponse.set(result.data);
            localStorage.setItem('accessToken', result.data.accessToken);
            localStorage.setItem('user', JSON.stringify(result.data.user));

            // Navigate automatically after success
            this.router.navigate(['/home']);
          } else {
            this._error.set(result.message);
          }
        })
      )
      .subscribe({
        next: () => console.log('Login observable completed successfully'),
        error: (err) => {
          console.error('Login error:', err);
          this._error.set(err.message || 'Login failed');
          this._isLoading.set(false);
        },
      });
  }

  logout() {
    this._loginResponse.set(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }
}
