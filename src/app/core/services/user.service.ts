import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { DelayService } from './delay.service';
import { NetworkErrorSimulationService } from './network-error-simulation.service';
import {
  User,
  mockUser1
} from '../models';


// Mock data service that mimics something like an API request for record data
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getCurrentUser(): Observable<User> {
    try {
      NetworkErrorSimulationService.simulateNetworkErrorChance();
      return of(mockUser1).pipe(delay(DelayService.getRandomWaitTime()));
    }
    catch (e) {
      return throwError(() => e);
    }
  }
}
