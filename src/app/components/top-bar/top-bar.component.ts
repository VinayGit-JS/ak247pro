import { Component } from '@angular/core';
import { ResponsiveSvgComponent } from "../util/responsive-svg/responsive-svg.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ResponsiveSvgComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

}
