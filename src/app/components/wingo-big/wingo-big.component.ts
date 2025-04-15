import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { WalletSummeryComponent } from "../../components/wallet-summery/wallet-summery.component";


@Component({
  selector: 'app-wingo-big',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './wingo-big.component.html',
  styleUrl: './wingo-big.component.scss'
})
export class WingoBigComponent {

  
}
