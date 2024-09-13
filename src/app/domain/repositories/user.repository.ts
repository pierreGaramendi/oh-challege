import { IUser } from '../models/User';

export interface UserRepository {
  authenticate(email: string, password: string): Promise<IUser>;
}
