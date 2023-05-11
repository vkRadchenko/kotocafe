const breedCats = [
  { key: 'Дворовая', name: 'Дворовая' },
  { key: 'Сфинкс', name: 'Сфинкс' },
]

type breedFilter = {
  onBreedChange: (params: string) => void
}
const BreedFilter: React.FC<breedFilter> = ({ onBreedChange }) => {
  return (
    <div className="col mt-3">
      <p className="mb-2 fw-bold">Выберите породу</p>
      <select
        className="form-select form-select-sm"
        aria-label="Default select example"
        defaultValue={''}
        onChange={(e) => onBreedChange(e.target.value)}
      >
        <option value={''}>Любая порода</option>
        {breedCats.map((breed) => (
          <option key={'breed-' + breed.name} value={breed.key}>
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BreedFilter
