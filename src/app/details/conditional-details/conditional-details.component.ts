import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conditional-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditional-details.component.html',
  styleUrl: './conditional-details.component.scss',
})
export class ConditionalDetailsComponent {
  @Input() result?: number;

  authors = ['Benjamin', 'Antonin'];
}
