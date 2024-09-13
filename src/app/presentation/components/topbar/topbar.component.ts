import { Component } from '@angular/core';
import { CustomeDorpdownComponent } from '../custome-dorpdown/custome-dorpdown.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CustomeDorpdownComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

}
