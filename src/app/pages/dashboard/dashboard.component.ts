import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { WalletSummeryComponent } from "../../components/wallet-summery/wallet-summery.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SidebarComponent, TopBarComponent, WalletSummeryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  navItems = [
    { icon: 'assets/icons/lobby.svg', text: 'Lobby', active: true },
    { icon: 'assets/icons/game.svg', text: 'Mini game', active: false },
    { icon: 'assets/icons/slots.svg', text: 'Slots', active: false },
    { icon: 'assets/icons/cards.svg', text: 'Card', active: false },
    { icon: 'assets/icons/fishing.svg', text: 'Fishing', active: false },
    { icon: 'assets/icons/casino.svg', text: 'Casino', active: false },
    { icon: 'assets/icons/sport.svg', text: 'Sports', active: false },
  ];
  categories = [
    {
      title: "Mini Game",
      icon: "/assets/images/home/icons/mini-game.png",
      games: [
        "/assets/images/home/game-1.png",
        "/assets/images/home/game-2.png",
        "/assets/images/home/game-3.png",
        "/assets/images/home/game-4.png",
        "/assets/images/home/game-5.png",
        "/assets/images/home/game-1.png",
        "/assets/images/home/game-2.png",
        "/assets/images/home/game-3.png",
        "/assets/images/home/game-4.png",
        "/assets/images/home/game-5.png"
      ]
    },
    {
      title: "Games",
      icon: "/assets/images/home/icons/games.png",
      games: [
        "/assets/images/home/mini-game-1.png",
        "/assets/images/home/mini-game-2.png",
        "/assets/images/home/mini-game-3.png",
        "/assets/images/home/mini-game-4.png",
        "/assets/images/home/mini-game-5.png"
      ]
    },
    {
      title: "Slots",
      icon: "/assets/images/home/icons/slots.png",
      games: [
        "/assets/images/home/slots-1.png",
        "/assets/images/home/slots-2.png",
        "/assets/images/home/slots-3.png",
        "/assets/images/home/slots-4.png",
        "/assets/images/home/slots-5.png"
      ]
    }
    ,
    {
      title: "Rummy",
      icon: "/assets/images/home/icons/rummy.png",
      games: [
        "/assets/images/home/rummy-1.png",
        "/assets/images/home/rummy-2.png",
        "/assets/images/home/rummy-1.png",
        "/assets/images/home/rummy-2.png",
        "/assets/images/home/rummy-1.png"

      ]
    }
    ,
    {
      title: "Fishing",
      icon: "/assets/images/home/icons/fishing.png",
      games: [
        "/assets/images/home/fishing-1.png",
        "/assets/images/home/fishing-2.png",
        "/assets/images/home/fishing-3.png",
        "/assets/images/home/fishing-4.png",
        "/assets/images/home/fishing-5.png",
      ]
    },
    {
      title: "Casino",
      icon: "/assets/images/home/icons/casino.png",
      games: [
        "/assets/images/home/casino-1.png",
        "/assets/images/home/casino-2.png",
        "/assets/images/home/casino-1.png",
        "/assets/images/home/casino-2.png",
        "/assets/images/home/casino-1.png",
      ]
    },
    {
      title: "Sports",
      icon: "/assets/images/home/icons/sports.png",
      games: [
        "/assets/images/home/sport-1.png",
        "/assets/images/home/sport-2.png",
        "/assets/images/home/sport-1.png",
        "/assets/images/home/sport-2.png",
        "/assets/images/home/sport-1.png",
      ]
    },
    {
      title: "Jackpot",
      icon: "/assets/images/home/icons/jackpot.png",
      games: [
        "/assets/images/home/jackpot-1.png",
        "/assets/images/home/jackpot-2.png",
        "/assets/images/home/jackpot-3.png",
        "/assets/images/home/jackpot-2.png",
        "/assets/images/home/jackpot-1.png",
      ]
    }
  ];
  noOfItemInSlider = 3;

  getDots(length: number): any[] {
    return Array(Math.ceil(length / 3));
  }
  navigate(iItem: number, iDot: number): void {
    const category = document.getElementById(`category-${iItem}`);
    const slider = document.getElementById(`slider-${iItem}`);
    const item = slider?.querySelector(".item") as HTMLElement | null;
    const dots = category?.querySelectorAll(".dot");
  
    const itemWidth = item?.clientWidth ?? 0;
  
    // Scroll the slider
    if (slider && itemWidth) {
      const scrollAmount = itemWidth * this.noOfItemInSlider * iDot;
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  
    // Update dot colors
    dots?.forEach((dot, index) => {
      const el = dot as HTMLElement;
      el.style.backgroundColor = (index === iDot) 
        ? "var(--color-secondary)" 
        : "#d9d9d9";
    });
  }
  
  handleScroll(event: Event, iItem: number) {
    const slider = event.target as HTMLElement;
    const item = slider.querySelector('.item');
    const itemWidth = item?.clientWidth || 1;
  
    const scrollLeft = slider.scrollLeft;
    const activeDot = Math.round(scrollLeft / (itemWidth * this.noOfItemInSlider));
  
    const category = document.getElementById(`category-${iItem}`);
    const dots = category?.querySelectorAll('.dot');
  
    if (dots) {
      dots.forEach((dot, index) => {
        (dot as HTMLElement).style.backgroundColor = index === activeDot ? 'var(--color-secondary)' : '#d2d2d2';
      });
    }
  }
  
}
