import { CatQualities } from './catQualities'

export interface CatsInterface {
  _id: string
  name: string
  breed: string
  sex: string
  year: string
  create_at: number
  health: string
  temper: string
  qualities?: Array<string>
  history: string
  image: string
}
