import { projectColors } from 'consts/projectColors'
import { useSelector } from 'react-redux'
import { getBreeds } from 'store/breed'

type breedFilter = {
  onBreedChange: (params: string) => void
  clearFilter: string
}
const BreedFilter: React.FC<breedFilter> = ({ onBreedChange, clearFilter }) => {
  const breed = useSelector(getBreeds())

  const handleBreedValue = (params: string) => {
    onBreedChange(params)
  }

  return (
    <div className="col mt-3 mb-3">
      <p className="mb-2 fw-bold">Выберите породу</p>
      <select
        className="form-select form-select-sm"
        style={{ color: `${projectColors.baseColor}` }}
        aria-label="Default select example"
        onChange={(e) => handleBreedValue(e.target.value)}
        value={clearFilter}
      >
        <option value={''}>Любая порода</option>
        {breed?.map((breed: any) => (
          <option key={breed._id} value={breed.key}>
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BreedFilter
