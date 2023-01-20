import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { DataModel, mockPersonalDataModelList, mockOrgDataModelList } from '../models';
import { DelayService } from './delay.service';
import { NetworkErrorSimulationService } from './network-error-simulation.service';


// Mock data service that mimics something like an API request for record data
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getPersonalData(): Observable<DataModel[]> {
    try {
      NetworkErrorSimulationService.simulateNetworkErrorChance();
      return of(mockPersonalDataModelList).pipe(delay(DelayService.getRandomWaitTime()));
    }
    catch (e) {
      return throwError(() => e);
    }
  }

  public getOrgData(): Observable<DataModel[]> {
    try {
      NetworkErrorSimulationService.simulateNetworkErrorChance();
      return of(mockOrgDataModelList).pipe(delay(DelayService.getRandomWaitTime()));
    }
    catch (e) {
      return throwError(() => e);
    }
  }
}
