export interface CatQualities {
  _id: string
  name: string
  color: string
}
export interface Qualities {
  [key: string]: CatQualities
}
  
