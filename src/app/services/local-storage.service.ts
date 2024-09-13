import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly STORAGE_KEY = 'users';

  constructor() {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      const initialData: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
      ];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(initialData));
    }
  }

  getUsers(): Observable<User[]> {
    const users = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    return of(users).pipe(delay(300));
  }

  addUser(user: User): Observable<User> {
    const users = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    user.id = users.length + 1;
    users.push(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    return of(user).pipe(delay(300));
  }
}
