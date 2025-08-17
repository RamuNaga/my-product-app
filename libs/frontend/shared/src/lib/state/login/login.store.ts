import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@my-product-app/frontend-data-access';
import { tap, map, switchMap } from 'rxjs/operators';
import { LoginResponse, LoginResult } from './login.model';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginStore {
  private router = inject(Router);
  private authService = inject(AuthService);

  private _loginResponse = signal<LoginResponse | null>(null);
  readonly loginResponse = computed(() => this._loginResponse());

  private _companyLocation = signal<any | null>(null);
  readonly companyLocation = computed(() => this._companyLocation());

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
          const loginData = res;
          if (loginData?.accessToken && loginData?.user) {
            return { status: 'success', data: loginData };
          }
          return { status: 'error', message: 'Invalid response from server' };
        }),
        switchMap((result: LoginResult) => {
          this._isLoading.set(false);

          if (result.status === 'success') {
            const { accessToken, user } = result.data;

            this._loginResponse.set(result.data);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('user', JSON.stringify(user));

            // Call getCompanyLocation using companyId from user
            return this.authService
              .getCompanyLocation({ companyId: Number(user.companyId) })
              .pipe(
                tap((locationData) => {
                  console.log('Company location:', locationData);
                  this._companyLocation.set(locationData);

                  // Navigate after fetching company location
                  this.router.navigate(['/home']);
                })
              );
          } else {
            this._error.set(result.message);
            return of(null);
          }
        })
      )
      .subscribe({
        next: () => console.log('Login & company location fetch completed'),
        error: (err) => {
          console.error('Error:', err);
          this._error.set(err.message || 'Login failed');
          this._isLoading.set(false);
        },
      });
  }

  logout() {
    this._loginResponse.set(null);
    this._companyLocation.set(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }
}
