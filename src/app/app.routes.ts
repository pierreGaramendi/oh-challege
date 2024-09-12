import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
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
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
