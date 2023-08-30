import { CatQualities } from './catQualities'

export interface CatsInterface {
  _id: string
  name: string
  breed: string
  sex: string
  age: string
  created_at: number
  health: string
  temper: string
  qualities?: Array<string>
  history: string
  image: string
  userId: string
}
