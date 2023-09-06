import { Component } from '@angular/core';
import { AppstateService } from '../appstate.service';
import { GameService } from '../game.service';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent {
  constructor(private appState: AppstateService, private gameService: GameService) { }
  heroes = this.appState.heroesForHire

  get gold() {
    return this.appState.gold
  }

  get nobodyIsDead(): boolean {
    return this.appState.heroes.every(h => h.health > 0)
  }

  buyPotion(): void {
    this.gameService.buyPotion()
  }

  buyHero(hero: Hero): void {
    this.gameService.buyHero(hero)
  }

  buyRevive(): void {
    this.gameService.buyRevive()
  }
}
