import { Component } from '@angular/core';
import { CustomAccordionComponent } from "../custom-accordion/custom-accordion.component";

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [CustomAccordionComponent],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.scss'
})
export class SidenavbarComponent {

}
