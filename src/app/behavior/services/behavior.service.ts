import { Injectable } from '@angular/core';
import { MockApiService } from '../../mock/mock-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorService {
  private _apiResults$ = new BehaviorSubject(0);
  private _multiplier$ = new BehaviorSubject(0);

  constructor(private mockApiService: MockApiService) {
    this.mockApiService.getApi$().subscribe((result) => {
      this._apiResults$.next(result);
    });
  }

  getMock$() {
    return this._apiResults$;
  }

  getMultiplier$() {
    return this._multiplier$;
  }

  setMultiplier(multiplier: number) {
    this._multiplier$.next(multiplier);
  }
}
