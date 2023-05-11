type inputOptions = {
  type: string
  name: string
  id: string
  value: string
  defaultChecked?: boolean
  labelContent: string
  onInputClick?: (params: string) => void
}

const InputSex: React.FC<inputOptions> = ({
  type,
  name,
  id,
  value,
  defaultChecked,
  labelContent,
  onInputClick = () => {},
}) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type={type}
        name={name}
        id={id}
        value={value}
        defaultChecked={defaultChecked}
        onClick={() => onInputClick(value)}
      />
      <label className="form-check-label" htmlFor={id}>
        {labelContent}
      </label>
    </div>
  )
}

export default InputSex
