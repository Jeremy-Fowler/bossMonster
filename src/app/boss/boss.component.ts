import { Component } from '@angular/core';
import { AppstateService } from '../appstate.service';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent {
  constructor(private appState: AppstateService) { }

  boss = this.appState.boss
}
