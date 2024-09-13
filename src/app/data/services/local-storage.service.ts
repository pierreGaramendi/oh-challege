import { Injectable } from '@angular/core';
import { IUser } from '../../domain/models/User';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly STORAGE_KEY = 'users';

  constructor() {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      const initialData: IUser[] = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          password: '123456',
        },
      ];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(initialData));
    }
  }

  async getUsers(): Promise<IUser[]> {
    const users = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    return new Promise((resolve) => {
      resolve(users);
    });
  }

  addUser(user: Partial<IUser>): Promise<Partial<IUser>> {
    const users = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    user.id = users.length + 1;
    users.push(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    return new Promise((resolve) => {
      resolve(users);
    });
  }
}
