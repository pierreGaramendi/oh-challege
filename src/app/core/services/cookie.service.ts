import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export enum SESSION_COOKIE {
  name = 'mySessionCookie',
}

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  private document = inject(DOCUMENT);

  setCookie(name: string, value: string, minutes: number) {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    this.document.cookie = `${name}=${value};${expires};path=/`;
  }

  getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const ca = this.document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  checkCookieExists(name: string) {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${name}=`));
    return !!cookieValue; // Devuelve true si la cookie existe, de lo contrario false
  }

  deleteCookie(name: string) {
    this.setCookie(name, '', -1);
  }
}
