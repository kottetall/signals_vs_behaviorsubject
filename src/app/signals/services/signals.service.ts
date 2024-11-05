import { Injectable, signal } from '@angular/core';
import { MockApiService } from '../../mock/mock-api.service';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  private _apiResultSignal = signal(0);
  private _multiplierSignal = signal(0);

  constructor(private mockApiService: MockApiService) {
    this.mockApiService.getApi$().subscribe((value) => {
      this._apiResultSignal.set(value);
    });
  }

  getMockSignal() {
    return this._apiResultSignal.asReadonly();
  }

  getMultiplierSignal() {
    return this._multiplierSignal.asReadonly();
  }

  setMultiplier(multiplier: number) {
    this._multiplierSignal.set(multiplier);
  }
}
