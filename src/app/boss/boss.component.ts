import { Component, OnInit } from '@angular/core';
import { AppstateService } from '../appstate.service';
import { GameService } from '../game.service';
import { Boss } from '../interfaces/boss';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {
  constructor(private appState: AppstateService, private gameService: GameService) { }
  ngOnInit(): void {
    setInterval(this.gameService.attackHero.bind(this), 3000)
  }
  get boss(): Boss {
    return this.appState.boss
  }

  get bossHealthPercent(): number {
    return ((this.boss.health / this.boss.maxHealth) * 100)
  }
  attackBoss(): void {
    this.gameService.attackBoss()
  }
}
