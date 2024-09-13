import { Injectable } from '@angular/core';
import { UserRepositoryImpl } from '../../data/repositories/user.repository.impl';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserUseCase {
  constructor(private userRepository: UserRepositoryImpl) {}
  execute(user: Partial<IUser>): Promise<IUser> {
    return this.userRepository.register(user);
  }
}
