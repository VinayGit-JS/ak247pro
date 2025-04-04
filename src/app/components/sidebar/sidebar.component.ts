import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    { text: 'Home', icon: '/assets/icons/home.svg', active: true },
    { text: 'Reports', icon: '/assets/icons/reports.svg' },
    { text: 'Profile', icon: '/assets/icons/profile.svg' },
    { text: 'Referral', icon: '/assets/icons/referral.svg' },
    { text: 'Help & Support', icon: '/assets/icons/help.svg' },
    { text: 'Logout', icon: '/assets/icons/logout.svg' }
  ];
}
