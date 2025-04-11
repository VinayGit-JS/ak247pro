import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { WalletSummeryComponent } from "../../components/wallet-summery/wallet-summery.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SidebarComponent, TopBarComponent, WalletSummeryComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
