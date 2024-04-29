import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-result',
  standalone: true,
  imports: [],
  templateUrl: './calculator-result.component.html',
  styleUrl: './calculator-result.component.scss',
})
export class CalculatorResultComponent {
  @Input() result?: number;
}
