interface RangeFieldProps {
  name: string
  label: string
  value: string
  onChange: (params: { name: string; value: string }) => void
}

const RangeField: React.FC<RangeFieldProps> = ({
  name,
  label,
  value,
  onChange,
}) => {
  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    onChange({ name: target.name, value: target.value })
  }
  return (
    <div className="mb-2">
      <label htmlFor="customRange2" className="form-label d-block">
        {label}
      </label>
      <div className="d-flex flex-nowrap ">
        <div className="flex-grow-1">
          <input
            name={name}
            type="range"
            className="form-range"
            min="0"
            max="25"
            id="customRange2"
            value={value}
            onChange={handleChange}
          />
        </div>
        <span className="d-flex ps-3">{`${value} год`}</span>
      </div>
    </div>
  )
}

export default RangeField
