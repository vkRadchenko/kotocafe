import React from 'react'
import Select from 'react-select'

interface MultiProps {
  options: any
  onChange: (props: any) => void
  name: string
  label: string
  defaultValue: string[]
}

const MultiSelectField: React.FC<MultiProps> = ({
  options,
  onChange,
  name,
  label,
  defaultValue,
}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.values(options)
      : options

  const handleChange = (value: any) => {
    onChange({ name: name, value })
  }
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        defaultValue={defaultValue}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  )
}

export default MultiSelectField
