import { Component } from '@angular/core';
import { CalculatorInputComponent } from './calculator/calculator-input/calculator-input.component';
import { CalculatorResultComponent } from './calculator/calculator-result/calculator-result.component';
import { ConditionalDetailsComponent } from './details/conditional-details/conditional-details.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CalculatorInputComponent, CalculatorResultComponent, ConditionalDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  result?: number;

  onCompute(result: number) {
    this.result = result;
  }
}
