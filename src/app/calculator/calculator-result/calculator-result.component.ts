import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculator-result',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './calculator-result.component.html',
  styleUrl: './calculator-result.component.scss',
})
export class CalculatorResultComponent {
  private _result?: number;
  resultSquareRoot?: number;
  multiplied = 1;

  get result(): number | undefined {
    return this._result;
  }

  @Input() set result(value: number | undefined) {
    if (value === undefined) return;
    this._result = value;
    this.resultSquareRoot = Math.sqrt(value);
    console.log('Result is', this.result);
    console.log('Square root result is', this.resultSquareRoot);
  }

  multiplyByTwo() {
    this.multiplied *= 2;
    console.log('Result multiplied by two is', this.multiplied);
  }
}
