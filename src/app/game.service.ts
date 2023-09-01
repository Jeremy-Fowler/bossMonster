import { Injectable } from '@angular/core';
import { AppstateService } from './appstate.service';
import { Boss } from './interfaces/boss';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private appState: AppstateService) { }
  attackHero() {
    const heroes = this.appState.heroes
    const ranomIndex = Math.floor(Math.random() * heroes.length)
    const randomHero = heroes[ranomIndex]
    randomHero.health -= this.appState.boss.attack
  }

  attackBoss() {
    this.appState.heroes.forEach(hero => {
      if (hero.health < 1) { return }

      const boss = this.appState.boss
      boss.health -= hero.attack
      if (boss.health <= 0) {
        boss.health = 0
        this.bossDies(boss)
      }
    })
  }

  bossDies(deadBoss: Boss) {
    const randomIndex = Math.floor(Math.random() * deadBoss.treasures.length)
    this.appState.gold += deadBoss.treasures[randomIndex]
  }
}
