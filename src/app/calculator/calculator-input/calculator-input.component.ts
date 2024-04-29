import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calculator-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './calculator-input.component.html',
  styleUrl: './calculator-input.component.scss',
})
export class CalculatorInputComponent {
  @Output() compute = new EventEmitter<number>();

  calculatorForm = new FormGroup({
    number1: new FormControl<number | null>(null, Validators.required),
    number2: new FormControl<number | null>(null, Validators.required),
  });

  onSubmit() {
    if (this.calculatorForm.valid) {
      const number1 = this.calculatorForm.get('number1')?.value as number;
      const number2 = this.calculatorForm.get('number2')?.value as number;
      this.compute.emit(number1 * number2);
    }
  }
}
