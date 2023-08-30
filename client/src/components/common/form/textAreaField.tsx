interface TextArea {
  label: string
  name: string
  value: string
  onChange: (params: { name: string; value: string }) => void
  error?: boolean
}

const TextAreaField: React.FC<TextArea> = ({
  label,
  name,
  value,
  onChange,
  error,
}) => {
  const handleChange = ({ target }: { target: HTMLTextAreaElement }) => {
    onChange({ name: target.name, value: target.value })
  }
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }

  return (
    <div className="mb-4">
      <label htmlFor={name}> {label}</label>
      <div className="input-group has-validation">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />

        {error && <div className="invalid-feedback ">{error}</div>}
      </div>
    </div>
  )
}

export default TextAreaField
