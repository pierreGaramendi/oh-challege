import { SignupStepsService } from '../services/signup-steps.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const StepTwoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const stepService = inject(SignupStepsService);
  const email = stepService.getEmail();
  console.log('email', email);
  if (email) {
    //router.navigate(['/signup/enter-data']);
    return true;
  }
  router.navigate(['/signup/verify-email']);
  return false;
};
