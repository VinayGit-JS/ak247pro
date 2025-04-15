import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    { text: 'Home', icon: '/assets/icons/home.svg', active : false, route: '/home' },
    { text: 'Reports', icon: '/assets/icons/reports.svg' , route: '/report' },
    { text: 'Profile', icon: '/assets/icons/profile.svg' , route: '/profile' },
    { text: 'Referral', icon: '/assets/icons/referral.svg' , route: '' },
    { text: 'Help & Support', icon: '/assets/icons/help.svg' , route: '' },
    { text: 'Logout', icon: '/assets/icons/logout.svg' }
  ];
}

