import React, { useState, useEffect } from 'react'
import { validator, ValidatorConfig } from 'utils/validator'
import TextField from 'components/common/form/textField'
import CheckBoxField from 'components/common/form/checkBoxField'
import { useAuth } from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
    stayOn: false,
  })
  const { logIn }: any = useAuth()

  const [errors, setErrors] = useState<{ [fieldName: string]: string }>({
    email: '',
    password: '',
  })
  const [enterError, setEnterError]: any = useState(null)

  const handleChange = (target: { name: string; value: string | boolean }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
    setEnterError(null)
  }

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения',
      },
      isEmail: {
        message: 'Некорректно введет email',
      },
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения',
      },
    },
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.values(errors).every((str) => str === '')
  }

  const isValid = Object.values(errors).every((str) => str === '')

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    try {
      await logIn(data)
      navigate('/')
    } catch (error: any) {
      setEnterError(error.message)
      console.log(error.message)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Пароль"
        type={'password'}
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
        Оставаться в системе
      </CheckBoxField>
      {enterError && (
        <p className="text-danger mb-1 text-center">{enterError}</p>
      )}
      <button
        className="btn btn-primary w-100 mx-auto"
        type="submit"
        disabled={!isValid || enterError}
      >
        Submit
      </button>
    </form>
  )
}

export default LoginForm
