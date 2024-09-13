import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  CookieService,
  SESSION_COOKIE,
} from '../../../core/services/cookie.service';
import { AuthenticateUserUseCase } from '../../../domain/use-cases/authenticate-user.usecase';
import { IUser } from '../../../domain/models/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private authenticateUserUseCase: AuthenticateUserUseCase
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      try {
        const user: Partial<IUser> = await this.authenticateUserUseCase.execute(
          email,
          password
        );
        this.cookieService.setCookie(SESSION_COOKIE.name, email, 5);
        this.router.navigate(['/home']);
      } catch (err: any) {
        alert(err.message || 'An error occurred during login');
      }
    } else {
      console.log('Form is invalid');
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
