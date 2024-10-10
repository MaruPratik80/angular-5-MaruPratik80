import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  arr = [1, 2, 3, 4, 5];

  getObservable() {
    return of(this.arr);
  }
}
