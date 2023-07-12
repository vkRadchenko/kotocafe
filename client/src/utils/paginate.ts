import { CatsInterface } from 'components/types/catsInterface'

export function paginate(
  items: CatsInterface[],
  pageNumber: number,
  pageSize: number
) {
  const startIndex = (pageNumber - 1) * pageSize
  if (items) return [...items].splice(startIndex, pageSize)
}
