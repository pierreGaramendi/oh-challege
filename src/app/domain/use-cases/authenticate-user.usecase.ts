import { Inject, Injectable } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { Observable } from 'rxjs';
import { UserRepositoryImpl } from '../../data/repositories/user.repository.impl';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepositoryImpl) {}
  execute(email: string, password: string): Observable<IUser> {
    return this.userRepository.authenticate(email, password);
  }
}
