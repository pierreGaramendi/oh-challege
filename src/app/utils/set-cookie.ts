import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

export const setCookie = (name: string, value: string, minutes: number) => {
  const theDocument = inject(DOCUMENT);
  const date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  theDocument.cookie = `${name}=${value};${expires};path=/`;
};
