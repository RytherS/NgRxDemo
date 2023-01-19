import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User, mockUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getCurrentUser(): Observable<User> {
    return of(mockUser).pipe(delay(1000));
  }
}
