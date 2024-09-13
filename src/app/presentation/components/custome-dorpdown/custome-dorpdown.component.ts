import { Component, ElementRef, HostListener } from '@angular/core';
import { signal, computed, input } from '@angular/core';
@Component({
  selector: 'app-custome-dorpdown',
  standalone: true,
  imports: [],
  templateUrl: './custome-dorpdown.component.html',
  styleUrl: './custome-dorpdown.component.scss',
})
export class CustomeDorpdownComponent {
  isOpen = false;
  title = input.required<string>();
  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}
