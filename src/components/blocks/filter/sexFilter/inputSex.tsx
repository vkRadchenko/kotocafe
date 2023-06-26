import styled from 'styled-components'

type inputOptions = {
  type: string
  name: string
  id: string
  value: string
  checked?: boolean
  labelContent: string
  onInputChange?: (params: string) => void
}

const InputSex: React.FC<inputOptions> = ({
  type,
  name,
  id,
  value,
  checked,
  labelContent,
  onInputChange = () => {},
}) => {
  return (
    <div className="form-check form-check-inline">
      <InputCustom
        className="form-check-input"
        type={type}
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={() => onInputChange(value)}
      />
      <label className="form-check-label" htmlFor={id}>
        {labelContent}
      </label>
    </div>
  )
}

const InputCustom = styled.input`
  :checked {
    background-color: #436e6f;
    border-color: #436e6f;
    color: #436e6f;
  }
`
export default InputSex
