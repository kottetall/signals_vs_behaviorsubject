import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorService } from '../../../behavior/services/behavior.service';
import { SignalsService } from '../../../signals/services/signals.service';

@Component({
  selector: 'app-multiplier',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './multiplier.component.html',
  styleUrl: './multiplier.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiplierComponent {
  multiplierForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private behaviorService: BehaviorService,
    private signalsService: SignalsService
  ) {
    this.multiplierForm = this.formBuilder.group({
      multiplier: 1,
    });

    this.multiplierForm.valueChanges.subscribe((value) => {
      let { multiplier } = value;
      if (typeof multiplier !== 'number') {
        multiplier = 1;
      }
      this.behaviorService.setMultiplier(multiplier);
      this.signalsService.setMultiplier(multiplier);
    });
  }
}
