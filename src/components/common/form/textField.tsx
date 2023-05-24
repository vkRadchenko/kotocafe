import React, { useState } from 'react'

interface TextFieldProps {
  label: string
  type?: string
  name: string
  value: string | boolean
  error: string
  onChange: (params: { name: string; value: string | boolean }) => void
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    const newValue = type === 'checkBox' ? target.checked : target.value
    onChange({ name: target.name, value: newValue })
  }
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }
  return (
    <div className="mb-3">
      <label htmlFor={name}> {label}</label>
      <div className="input-group has-validation">
        <input
          className={getInputClasses()}
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value as string}
          onChange={handleChange}
        />

        {type === 'password' && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toggleShowPassword}
          >
            <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}></i>
          </button>
        )}

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
}

export default TextField
