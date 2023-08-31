import { Component } from '@angular/core';
import { AppstateService } from './appstate.service';
import { Hero } from './interfaces/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appState: AppstateService) { }
  title = 'Boss Monster';
  heroes: Hero[] = this.appState.heroes
}
