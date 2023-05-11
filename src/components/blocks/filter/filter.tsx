import Button from 'components/ui/button/button'
import BreedFilter from './breedFilter'
import RangeYearFilter from './rangeFilter/rangeYearFilter'
import SexFilter from './sexFilter/sexFilter'
import { useEffect, useState } from 'react'

type catsFilter = {
  onCatSelect: (params: any) => void
}

const Filter: React.FC<catsFilter> = ({ onCatSelect }) => {
  const [allFilteredData, setAllFilteredData] = useState({
    sex: '',
    breed: '',
    yaer: [1, 15],
  })
  console.log(allFilteredData.yaer)

  useEffect(() => {
    onCatSelect(allFilteredData)
  }, [allFilteredData])

  const handleSexStatus = (params: string) => {
    setAllFilteredData((prevstate) => ({ ...prevstate, sex: params }))
  }
  const handleBreedStatus = (params: string) => {
    setAllFilteredData((prevstate) => ({ ...prevstate, breed: params }))
  }

  const handleYearStatus = (params: Array<number>) => {
    setAllFilteredData((prevstate) => ({ ...prevstate, yaer: params }))
  }

  return (
    <>
      <SexFilter onSexChange={handleSexStatus} />
      <BreedFilter onBreedChange={handleBreedStatus} />
      <RangeYearFilter onYearChange={handleYearStatus} />

      <Button>Сбросить</Button>
    </>
  )
}

export default Filter
