import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authWatcherGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (checkCookieExists('mySession')) {
    return true; // Permitir el acceso si la cookie existe
  } else {
    router.navigate(['/login']); // Redirigir al login si no existe la cookie
    return false;
  }
};

const checkCookieExists = (name: string) => {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));
  return !!cookieValue; // Devuelve true si la cookie existe, de lo contrario false
};
