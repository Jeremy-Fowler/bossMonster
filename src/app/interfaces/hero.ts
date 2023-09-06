export interface Hero {
  name: string
  health: number
  attack: number
  class: Class
  imgUrl: string
  price: number
}

type Class = 'cleric' | 'warrior' | 'wizard'

type ImgUrls = {
  idle: string
  attack: string
  hurt: string
  celebrate: string
}