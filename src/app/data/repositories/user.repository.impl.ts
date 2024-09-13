import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { IUser } from '../../domain/models/User';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryImpl implements UserRepository {
  constructor(private localStorageService: LocalStorageService) {}

  users: IUser[] = [];

  async authenticate(email: string, password: string): Promise<IUser> {
    try {
      const users = await this.localStorageService.getUsers();
      this.users = users;
      const user = this.users.find(
        (u: IUser) => u.email === email && u.password === password
      );
      if (user) {
        return user;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Error during authentication: ' + error.message);
      } else {
        throw new Error('Unknown error during authentication');
      }
    }
  }

  async findByEmail(email: string): Promise<boolean> {
    try {
      const users: IUser[] = await this.localStorageService.getUsers();
      const user = users.find((u: IUser) => u.email === email);
      return user ? true : false;
    } catch (error) {
      console.error('Error fetching users: ', error);
      return false;
    }
  }

  async register(user: Partial<IUser>): Promise<IUser> {
    try {
      const newUser: Partial<IUser> = await this.localStorageService.addUser(user);
      return newUser as IUser;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  }
}
