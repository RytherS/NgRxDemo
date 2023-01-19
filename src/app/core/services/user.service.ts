import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User, mockUser } from '../models';
import { DelayService } from './delay.service';


// Mock data service that mimics something like an API request for record data
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getCurrentUser(): Observable<User> {
    return of(mockUser).pipe(delay(DelayService.getRandomWaitTime()));
  }
}
