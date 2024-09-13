import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup-verify-email',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup-verify-email.component.html',
  styleUrl: './signup-verify-email.component.scss',
})
export class SignupVerifyEmailComponent {
  stepOneForm: FormGroup;
  constructor(private router: Router) {
    this.stepOneForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  error = '';
  onSubmit() {
    if (this.stepOneForm.valid) {
      const email = this.stepOneForm.value.email;
      this.router.navigate(['/signup/enter-data']);
    } else {
      console.log('Form is invalid');
    }
  }

  isFormValid() {
    return this.stepOneForm.valid
  }

  get email() {
    return this.stepOneForm.get('email');
  }
}
