import React from 'react'
import PropTypes from 'prop-types'

interface Radio {
  options: { [key: string]: string }[]
  name: string
  value: string
  label: string
  onChange: (params: { name: string; value: string }) => void
}

const RadioField: React.FC<Radio> = ({
  options,
  name,
  onChange,
  value,
  label,
}) => {
  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    onChange({ name: target.name, value: target.value })
  }
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div>
        {options.map((option) => (
          <div
            key={option.name + '_' + option.value}
            className="form-check form-check-inline"
          >
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={option.name + '_' + option.value}
              checked={option.value === value}
              value={option.value}
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor={option.name + '_' + option.value}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadioField
