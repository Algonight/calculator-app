import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculator-result',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './calculator-result.component.html',
  styleUrl: './calculator-result.component.scss',
})
export class CalculatorResultComponent {
  result = input.required<number | undefined>();
  resultSquareRoot = computed(() => (this.result() !== undefined ? Math.sqrt(this.result() as number) : undefined));
  multiplied = signal(1);

  constructor() {
    effect(() => {
      console.log('Result changed to', this.result());
      console.log('Square root of result is', this.resultSquareRoot());
      console.log('Result multiplied by two is', this.multiplied());
    });
  }

  multiplyByTwo() {
    this.multiplied.update((prev) => prev * 2);
  }
}
