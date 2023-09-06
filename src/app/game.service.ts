import { Injectable } from '@angular/core';
import { AppstateService } from './appstate.service';
import { Boss } from './interfaces/boss';
import { Hero } from './interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  buyHero(hero: Hero) {
    if (hero.price > this.appState.gold) { throw new Error("Not enough gold") }

    this.appState.gold -= hero.price
    this.appState.heroes.push(hero)

    const heroIndex = this.appState.heroesForHire.findIndex(h => h == hero)

    if (heroIndex == -1) { throw new Error("something went wrong") }

    this.appState.heroesForHire.splice(heroIndex, 1)
  }

  constructor(private appState: AppstateService) { }
  attackHero() {
    const heroes = this.appState.heroes.filter(h => h.health > 0)

    if (!heroes.length) { return }

    const ranomIndex = Math.floor(Math.random() * heroes.length)
    const randomHero = heroes[ranomIndex]

    randomHero.health -= this.appState.boss.attack
    if (randomHero.health <= 0) {
      randomHero.health = 0
    }

    if (this.appState.heroes.every(hero => hero.health == 0)) {
      window.alert("GAME OVER")
    }

  }

  attackBoss() {
    this.appState.heroes.forEach(hero => {
      const boss = this.appState.boss
      if (hero.health < 1 || boss.health < 1) { return }

      boss.health -= hero.attack
      if (boss.health <= 0) {
        boss.health = 0
        this.bossDies(boss)
      }
    })
  }

  bossDies(deadBoss: Boss) {
    const randomTreasureIndex = Math.floor(Math.random() * deadBoss.treasures.length)
    this.appState.gold += deadBoss.treasures[randomTreasureIndex]

    deadBoss.health = deadBoss.maxHealth

    const bosses = this.appState.bosses

    const randomBossIndex = Math.floor(Math.random() * bosses.length)
    this.appState.boss = bosses[randomBossIndex]
  }



  buyPotion() {
    const heroes = this.appState.heroes
    const randomHeroIndex = Math.floor(Math.random() * heroes.length)
    const randomHero = heroes[randomHeroIndex]
    randomHero.health += 20
    this.appState.gold -= 50
  }

  buyRevive() {
    const deadHeroes = this.appState.heroes.filter(h => !h.health)
    const randomIndex = Math.floor(Math.random() * deadHeroes.length)
    deadHeroes[randomIndex].health = 30
    this.appState.gold -= 100
  }
}
