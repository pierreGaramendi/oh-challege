import { Component } from '@angular/core';
import { CustomeDorpdownComponent } from '../custome-dorpdown/custome-dorpdown.component';
import { DropdownWorkspacesComponent } from '../dropdown-workspaces/dropdown-workspaces.component';
import { DropdownNewBoardComponent } from '../dropdown-new-board/dropdown-new-board.component';
import { DropdownRecentWorkspaceComponent } from '../dropdown-recent-workspace/dropdown-recent-workspace.component';
import { CustomeAvatarComponent } from '../custome-avatar/custome-avatar.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CustomeDorpdownComponent,
    DropdownWorkspacesComponent,
    DropdownNewBoardComponent,
    DropdownRecentWorkspaceComponent,
    CustomeAvatarComponent
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {}
