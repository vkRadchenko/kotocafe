export interface CatsInterface {
  id: string
  name: string
  breed: string
  sex: string
  year: string
  periodInShelter: number
  health: string
  temper: string
  qualities?: Array<string>
  history: string
}
