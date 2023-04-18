const SexFilter: React.FC = () => {
  return (
    <div className="col">
      <p className="mb-2 fw-bold">Выберите пол</p>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Все
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          Кошки
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
        />
        <label className="form-check-label" htmlFor="inlineRadio3">
          Коты
        </label>
      </div>
    </div>
  )
}

export default SexFilter
