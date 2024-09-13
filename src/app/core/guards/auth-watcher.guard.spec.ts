import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authWatcherGuard } from './auth-watcher.guard';

describe('authWatcherGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authWatcherGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
