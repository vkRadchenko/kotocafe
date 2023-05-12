import BreedFilter from './breedFilter'
import SexFilter from './sexFilter/sexFilter'
import Button from 'components/ui/button/button'
import { useEffect, useState, useRef } from 'react'

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
  const handleButtonReset = () => {
    setAllFilteredData({ sex: '', breed: '' })
  }

  return (
    <>
      <SexFilter
        onSexChange={handleSexStatus}
        clearFilter={allFilteredData.sex}
      />
      <BreedFilter
        onBreedChange={handleBreedStatus}
        clearFilter={allFilteredData.breed}
      />
      <Button onClick={handleButtonReset}>Сбросить</Button>
    </>
  )
}

export default Filter
