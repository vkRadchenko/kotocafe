import React, { useState, useEffect } from 'react'
import { validator } from 'utils/validator'
import TextField from 'components/common/form/textField'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthErrors, logIn } from 'store/user'
import Button from './button/button'

const LoginForm: React.FC = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const dispatch: any = useDispatch()
  const loginError = useSelector(getAuthErrors())

  const [errors, setErrors] = useState<{ [fieldName: string]: string }>({
    email: '',
    password: '',
  })

  const handleChange = (target: { name: string; value: string | boolean }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    dispatch(logIn(data))
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
      {loginError && (
        <p className="text-danger mb-1 text-center">{loginError}</p>
      )}

      <Button type="submit" block size="md" disabled={!isValid}>
        Войти
      </Button>
    </form>
  )
}

export default LoginForm
