import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * DataService for sharing data among components.
 */
@Injectable({
  providedIn: 'root', // This option makes the service a singleton
})
export class DataService {
   
  private sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$: Observable<any> = this.sharedDataSubject.asObservable();

    /**
   * Sets the shared data
   * @param data The data to be shared
   */
  setSharedData(data: any) {
    this.sharedDataSubject.next(data);
  }


  /**
   * Retrieves the shared data
   * @returns The shared data
   */
  getSharedData() {
    return this.sharedData$;
  }
}
