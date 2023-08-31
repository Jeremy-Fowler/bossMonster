import { Injectable } from '@angular/core';
import { Hero } from './interfaces/hero';
import { Boss } from './interfaces/boss';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  gold = 0

  heroes: Hero[] = [
    {
      name: 'jake',
      health: 100,
      attack: 5,
      class: 'warrior',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Party/Wind/Blue%20Mage1%20-%20Walk.gif'
    },
    {
      name: 'mick',
      health: 80,
      attack: 10,
      class: 'wizard',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Party/Fire/Beastmaster1%20-%20Walk.gif'
    }
  ]

  heroesForHire: Hero[] = [
    {
      name: 'sam',
      health: 50,
      attack: 15,
      class: 'warrior',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Party/Earth/Samurai2%20-%20Walk.gif'
    },
    {
      name: 'miles',
      health: 80,
      attack: 10,
      class: 'cleric',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Party/Wind/White%20Mage3%20-%20Walk.gif'
    }
  ]

  boss: Boss = {
    name: 'skelly',
    imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Enemies/Skeleton.gif',
    maxHealth: 100,
    health: 100,
    attack: 10
  }

}
