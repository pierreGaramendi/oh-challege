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
} from '../../../../../core/services/cookie.service';
import { RegisterUserUseCase } from '../../../../../domain/use-cases/register-user.usecase';
import { IUser } from '../../../../../domain/models/User';
import { SignupStepsService } from '../../services/signup-steps.service';

@Component({
  selector: 'app-signup-enter-data',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup-enter-data.component.html',
  styleUrl: './signup-enter-data.component.scss',
})
export class SignupEnterDataComponent {
  error = '';
  stepTwoForm: FormGroup;
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private registerUserUseCase: RegisterUserUseCase,
    private stepService: SignupStepsService
  ) {
    this.stepTwoForm = new FormGroup({
      email: new FormControl(this.stepService.getEmail(), [
        Validators.required,
        Validators.email,
      ]),
      name: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  async onSubmit() {
    if (this.stepTwoForm.valid) {
      const email = this.stepTwoForm.value.email;
      const name = this.stepTwoForm.value.name;
      const password = this.stepTwoForm.value.password;
      const user = { email, name, password };

      try {
        const registeredUser: IUser = await this.registerUserUseCase.execute(
          user
        );
        this.cookieService.setCookie(
          SESSION_COOKIE.name,
          registeredUser.email,
          5
        );
        this.router.navigate(['/home']);
      } catch (err: any) {
        alert(err.message || 'An error occurred during registration');
      }
    } else {
      console.log('Form is invalid');
    }
  }

  get email() {
    return this.stepTwoForm.get('email');
  }
  get name() {
    return this.stepTwoForm.get('name');
  }
  get password() {
    return this.stepTwoForm.get('password');
  }
  get confirmPassword() {
    return this.stepTwoForm.get('confirmPassword');
  }
}
