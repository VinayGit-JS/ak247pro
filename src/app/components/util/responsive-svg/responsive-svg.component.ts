import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-responsive-svg',
  standalone: true,
  imports: [],
  templateUrl: './responsive-svg.component.html',
  styleUrl: './responsive-svg.component.scss'
})
export class ResponsiveSvgComponent {
  @Input() mobile!: any;
  @Input() desktop!: any;
}
