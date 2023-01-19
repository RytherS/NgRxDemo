import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { DataModel, mockPersonalDataModelList, mockOrgDataModelList } from '../models';
import { DelayService } from './delay.service';


// Mock data service that mimics something like an API request for record data
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getPersonalData(): Observable<DataModel[]> {
    return of(mockPersonalDataModelList).pipe(delay(DelayService.getRandomWaitTime()));
  }

  public getOrgData(): Observable<DataModel[]> {
    return of(mockOrgDataModelList).pipe(delay(DelayService.getRandomWaitTime()));
  }
}
