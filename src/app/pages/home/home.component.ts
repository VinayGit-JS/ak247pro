import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
}
