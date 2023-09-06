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
      name: 'jake the snake',
      health: 100,
      attack: 5,
      class: 'warrior',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Party/Wind/Blue%20Mage1%20-%20Walk.gif',
      price: 0
    }
  ]

  heroesForHire: Hero[] = [
    {
      name: 'mick the sheep',
      health: 80,
      attack: 10,
      class: 'wizard',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Party/Fire/Beastmaster1%20-%20Walk.gif',
      price: 20
    },
    {
      name: 'sam the wild',
      health: 50,
      attack: 15,
      class: 'warrior',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Party/Earth/Samurai2%20-%20Walk.gif',
      price: 50
    },
    {
      name: 'miles the robed',
      health: 80,
      attack: 10,
      class: 'warrior',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Party/Wind/White%20Mage3%20-%20Walk.gif',
      price: 100
    }
  ]


  bosses: Boss[] = [
    {
      name: 'skelly',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Enemies/Skeleton.gif',
      maxHealth: 100,
      health: 100,
      attack: 10,
      treasures: [10, 30, 100]
    },
    {
      name: 'loud baby',
      imgUrl: 'http://www.videogamesprites.net/FinalFantasy5/Enemies/Zu.gif',
      maxHealth: 250,
      health: 250,
      attack: 20,
      treasures: [50, 100, 500]

    },
  ]
  boss: Boss = this.bosses[0]
}
