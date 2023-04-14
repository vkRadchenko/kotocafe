import Button from 'components/ui/button/button'
import BreedFilter from './breedFilter'
import RangeYearFilter from './rangeYearFilter'
import SexFilter from './sexFilter'

const Filter: React.FC = () => {
  return (
    <>
      <div
        style={{ height: 'fit-content' }}
        className="col-3 border rounded pt-3 pb-3"
      >
        <SexFilter />
        <BreedFilter />
        <RangeYearFilter />

        <Button>Сбросить</Button>
      </div>
    </>
  )
}

export default Filter
