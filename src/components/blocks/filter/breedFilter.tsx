const BreedFilter: React.FC = () => {
  return (
    <div className="col mt-3">
      <p className="mb-2 fw-bold">Выберите породу</p>
      <select
        className="form-select form-select-sm"
        aria-label="Default select example"
        defaultValue={'DEFAULT'}
      >
        <option value={'DEFAULT'}>Выберите породу</option>
        <option value="1">Британская</option>
        <option value="2">Сфинкс</option>
      </select>
    </div>
  )
}

export default BreedFilter
