import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupStepsService {
  private email: string | null = null;

  setEmail(email: string) {
    this.email = email;
  }

  getEmail(): string | null {
    return this.email;
  }
}
