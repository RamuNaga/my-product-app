import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (_route, _state) => {
  const token = localStorage.getItem('accessToken');
  const router = inject(Router);

  if (!token) {
    return router.createUrlTree(['/login']);
  }

  return true;
};
