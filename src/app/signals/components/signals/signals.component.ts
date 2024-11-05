import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { SignalsService } from '../../services/signals.service';

@Component({
  selector: 'app-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  private signalsService = inject(SignalsService);
  apiResult = this.signalsService.getMockSignal();
  multiplier = this.signalsService.getMultiplierSignal();
  counterAndMultiplier = computed(() => {
    return this.apiResult() * this.multiplier();
  });
}
