import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FindUserUseCase } from '../../../../../domain/use-cases/find-user.usecase';
import { SignupStepsService } from '../../services/signup-steps.service';

@Component({
  selector: 'app-signup-verify-email',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup-verify-email.component.html',
  styleUrl: './signup-verify-email.component.scss',
})
export class SignupVerifyEmailComponent {
  stepOneForm: FormGroup;
  constructor(
    private router: Router,
    private findUserUseCase: FindUserUseCase,
    private stepService: SignupStepsService
  ) {
    this.stepOneForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  error = '';

  async onSubmit() {
    if (this.stepOneForm.valid) {
      const email = this.stepOneForm.value.email;
      try {
        const exist: boolean = await this.findUserUseCase.execute(email);
        console.log("usuario existe", exist);
        if (exist) {
          alert('El usuario ya está registrado');
          this.router.navigate(['/login']);
        } else {
          this.stepService.setEmail(email);
          this.router.navigate(['/signup/enter-data']);
        }
      } catch (err: any) {
        alert(err.message || 'An error occurred');
      }
    } else {
      console.log('Form is invalid');
    }
  }


  isFormValid() {
    return this.stepOneForm.valid;
  }

  get email() {
    return this.stepOneForm.get('email');
  }
}
