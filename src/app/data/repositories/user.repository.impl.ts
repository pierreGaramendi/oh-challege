import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { IUser } from '../../domain/models/User';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryImpl implements UserRepository {
  constructor(private localStorageService: LocalStorageService) {}
  users: IUser[] = [];
  authenticate(email: string, password: string): Observable<IUser> {
    this.localStorageService.getUsers().subscribe((users) => {
      this.users = users;
    });
    const user = this.users.find(
      (u: IUser) => u.email === email && u.password === password
    );
    if (user) {
      return of(user);
    }
    return throwError(() => new Error('Invalid credentials'));
  }
}
