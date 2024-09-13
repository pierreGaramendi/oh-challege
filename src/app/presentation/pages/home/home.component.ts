import { Component } from '@angular/core';
import { CustomeAvatarComponent } from '../../components/custome-avatar/custome-avatar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomeAvatarComponent, CustomeAvatarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
