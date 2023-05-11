import Button from 'components/ui/button/button'
import BreedFilter from './breedFilter'
import SexFilter from './sexFilter/sexFilter'
import { useEffect, useState } from 'react'

type catsFilter = {
  onCatSelect: (params: any) => void
}

const Filter: React.FC<catsFilter> = ({ onCatSelect }) => {
  const [allFilteredData, setAllFilteredData] = useState({
    sex: '',
    breed: '',
  })

  useEffect(() => {
    onCatSelect(allFilteredData)
  }, [allFilteredData])

  const handleSexStatus = (params: string) => {
    setAllFilteredData((prevstate) => ({ ...prevstate, sex: params }))
  }
  const handleBreedStatus = (params: string) => {
    setAllFilteredData((prevstate) => ({ ...prevstate, breed: params }))
  }

  return (
    <>
      <SexFilter onSexChange={handleSexStatus} />
      <BreedFilter onBreedChange={handleBreedStatus} />
      <Button>Сбросить</Button>
    </>
  )
}

export default Filter
