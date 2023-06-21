import React from 'react'
import Select from 'react-select'

interface MultiProps {
  options: any
  onChange: (props: any) => void
  name: string
  label: string
  defaultValue: any
  isMulti?: boolean
  closeMenuOnSelect?: boolean
}

const MultiSelectField: React.FC<MultiProps> = ({
  options,
  onChange,
  name,
  label,
  defaultValue,
  isMulti = true,
  closeMenuOnSelect = false,
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
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
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
