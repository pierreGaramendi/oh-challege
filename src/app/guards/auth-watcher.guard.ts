import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService, SESSION_COOKIE } from '../services/cookie.service';

export const authWatcherGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);
  if (cookieService.checkCookieExists(SESSION_COOKIE.name)) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
