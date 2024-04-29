import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator-result.component.html',
  styleUrl: './calculator-result.component.scss',
})
export class CalculatorResultComponent {
  private _result?: number;
  resultSquareRoot?: number;

  get result(): number | undefined {
    return this._result;
  }

  @Input() set result(value: number | undefined) {
    if (value === undefined) return;
    this._result = value;
    this.resultSquareRoot = Math.sqrt(value);
  }
}
