import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { WalletSummeryComponent } from "../../components/wallet-summery/wallet-summery.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SidebarComponent, TopBarComponent, WalletSummeryComponent],
  templateUrl: './wingo.component.html',
  styleUrl: './wingo.component.scss'
})
export class WingoComponent {

  historyData = [
    { period: '20250406100052318', number: 7, type: 'Big', color: '#00c853' },  // green
    { period: '20250406100052318', number: 7, type: 'Small', color: '#f00' },   // red
    { period: '20250406100052318', number: 7, type: 'Big', color: 'linear-gradient(180deg, #C86EFF 45.16%, #FF0000 100%)' },
    { period: '20250406100052318', number: 7, type: 'Big', color: '#00c853' },
    { period: '20250406100052318', number: 7, type: 'Small', color: '#f00' },
    { period: '20250406100052318', number: 7, type: 'Big', color: 'linear-gradient(180deg, #C86EFF 18.06%, #00D457 80.56%)' },
    { period: '20250406100052318', number: 7, type: 'Small', color: '#00c853' }
  ];

  
}
