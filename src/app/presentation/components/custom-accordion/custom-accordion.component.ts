import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-custom-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-accordion.component.html',
  styleUrl: './custom-accordion.component.scss'
})
export class CustomAccordionComponent {
  title = input.required<string>();
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
