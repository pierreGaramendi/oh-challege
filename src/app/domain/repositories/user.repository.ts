import { Observable } from 'rxjs';
import { IUser } from '../models/User';

export interface UserRepository {
  authenticate(email: string, password: string): Observable<IUser>;
}
