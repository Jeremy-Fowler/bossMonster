export interface Hero {
  name: string
  health: number
  attack: number
  class: Class
  imgUrl: string
}

type Class = 'thief' | 'cleric' | 'warrior' | 'wizard'