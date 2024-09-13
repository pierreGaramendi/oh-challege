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
  constructor(private router: Router, private cookieService: CookieService) {
    this.stepTwoForm = new FormGroup({
      email: new FormControl('pierre.garamendi@gmail.com', [
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
  onSubmit() {
    if (this.stepTwoForm.valid) {
      const email = this.stepTwoForm.value.email;
      this.cookieService.setCookie(SESSION_COOKIE.name, email, 5);
      this.router.navigate(['/home']);
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
