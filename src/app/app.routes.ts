import { Routes } from '@angular/router';
import { authWatcherGuard } from './guards/auth-watcher.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    canActivate: [authWatcherGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./presentation/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./presentation/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./presentation/pages/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
    children: [
      {
        path: 'verify-email',
        loadComponent: () =>
          import(
            './presentation/pages/signup/pages/signup-verify-email/signup-verify-email.component'
          ).then((m) => m.SignupVerifyEmailComponent),
      },
      {
        path: 'enter-data',
        loadComponent: () =>
          import(
            './presentation/pages/signup/pages/signup-enter-data/signup-enter-data.component'
          ).then((m) => m.SignupEnterDataComponent),
      },
      { path: '', redirectTo: '/signup/verify-email', pathMatch: 'full' }
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
