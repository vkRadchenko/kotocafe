import React from 'react'
import Select from 'react-select'

interface MultiProps {
  options: { label: string; value: string }[] | undefined
  onChange: (props: any) => void
  name: string
  label: string
  defaultValue: { label: string; value: string } | [] | null
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
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  )
}

export default MultiSelectField
