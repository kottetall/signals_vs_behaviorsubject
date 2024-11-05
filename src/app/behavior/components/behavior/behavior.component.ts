import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorService } from '../../services/behavior.service';
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  Subject,
  takeUntil,
} from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-behavior',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './behavior.component.html',
  styleUrl: './behavior.component.scss',
})
export class BehaviorComponent implements OnInit, OnDestroy {
  apiResult$ = new BehaviorSubject(0);
  multiplier$ = new BehaviorSubject(0);
  counterAndMultiplier$ = new BehaviorSubject(0);

  private _destroy$ = new Subject<void>();

  constructor(private behaviorService: BehaviorService) {}

  ngOnInit(): void {
    this.behaviorService
      .getMock$()
      .pipe(distinctUntilChanged(), takeUntil(this._destroy$))
      .subscribe((result) => {
        this.apiResult$.next(result);
      });

    this.behaviorService
      .getMultiplier$()
      .pipe(distinctUntilChanged(), takeUntil(this._destroy$))
      .subscribe((multiplier) => {
        this.multiplier$.next(multiplier);
      });

    combineLatest([this.apiResult$, this.multiplier$])
      .pipe(distinctUntilChanged(), takeUntil(this._destroy$))
      .subscribe((result) => {
        const [counter, multiplier] = result;
        this.counterAndMultiplier$.next(counter * multiplier);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
