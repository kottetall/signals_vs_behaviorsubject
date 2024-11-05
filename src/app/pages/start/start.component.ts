import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalsComponent } from '../../signals/components/signals/signals.component';
import { BehaviorComponent } from '../../behavior/components/behavior/behavior.component';
import { MultiplierComponent } from '../../shared/components/multiplier/multiplier.component';

@Component({
  selector: 'app-start',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SignalsComponent, BehaviorComponent, MultiplierComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {}
