import { Injectable } from '@angular/core';
import { UserRepositoryImpl } from '../../data/repositories/user.repository.impl';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepositoryImpl) {}
  execute(email: string, password: string): Promise<IUser> {
    return this.userRepository.authenticate(email, password);
  }
}
