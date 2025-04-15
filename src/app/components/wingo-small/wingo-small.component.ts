import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-wingo-small',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './wingo-small.component.html',
  styleUrl: './wingo-small.component.scss'
})
export class WingoSmallComponent {

}
