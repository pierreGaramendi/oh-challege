import { Injectable } from '@angular/core';
import { UserRepositoryImpl } from '../../data/repositories/user.repository.impl';

@Injectable({
  providedIn: 'root',
})
export class FindUserUseCase {
  constructor(private userRepository: UserRepositoryImpl) {}
  execute(email: string): Promise<boolean> {
    return this.userRepository.findByEmail(email);
  }
}
