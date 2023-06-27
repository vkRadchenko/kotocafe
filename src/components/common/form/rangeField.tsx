import styled from 'styled-components'
import transformStringAge from 'utils/transformStringAge'

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
          <InputRange
            name={name}
            type="range"
            className="form-range"
            min="0"
            max="20"
            id="customRange2"
            value={value}
            onChange={handleChange}
          />
        </div>
        <span className="d-flex ps-3">{`${value} ${transformStringAge(
          value
        )}`}</span>
      </div>
    </div>
  )
}

const InputRange = styled.input`
  ::-webkit-slider-thumb {
    background-color: #436e6f;
    :checked {
      background-color: #436e6f;
    }
  }
`
export default RangeField
