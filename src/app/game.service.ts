import { Injectable } from '@angular/core';
import { AppstateService } from './appstate.service';

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
      if (hero.health < 1) {
        return
      }
      const boss = this.appState.boss
      boss.health -= hero.attack
      if (boss.health < 0) {
        boss.health = 0
      }
    })
  }
}
