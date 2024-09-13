import { Component } from '@angular/core';
import { CustomeDorpdownComponent } from '../custome-dorpdown/custome-dorpdown.component';
import { DropdownWorkspacesComponent } from '../dropdown-workspaces/dropdown-workspaces.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CustomeDorpdownComponent, DropdownWorkspacesComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {}
