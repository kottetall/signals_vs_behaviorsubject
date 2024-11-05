import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private _result$ = interval(1);

  getApi$() {
    return this._result$;
  }
}
