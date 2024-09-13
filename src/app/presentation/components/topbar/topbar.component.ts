import { Component } from '@angular/core';
import { CustomeDorpdownComponent } from '../custome-dorpdown/custome-dorpdown.component';
import { DropdownWorkspacesComponent } from '../dropdown-workspaces/dropdown-workspaces.component';
import { DropdownNewBoardComponent } from "../dropdown-new-board/dropdown-new-board.component";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CustomeDorpdownComponent, DropdownWorkspacesComponent, DropdownNewBoardComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {}
