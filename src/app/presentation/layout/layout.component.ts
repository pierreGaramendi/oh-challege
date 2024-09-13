import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { SidenavbarComponent } from "../components/sidenavbar/sidenavbar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, RouterOutlet, SidenavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
