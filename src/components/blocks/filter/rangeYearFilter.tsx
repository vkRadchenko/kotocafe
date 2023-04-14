const RangeYearFilter: React.FC = () => {
  return (
    <div className="col mt-3">
      <p className="mb-2 fw-bold">Выберите возраст</p>
      <div className="d-flex ">
        <input
          type="range"
          className="form-range "
          min="1"
          max="5"
          defaultValue="1"
          id="customRange2"
        />
        <div className="d-flex justify-content-center">
          <span className="d-block ms-3">0</span>
        </div>
      </div>
    </div>
  )
}

export default RangeYearFilter
