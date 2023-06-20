import React, { useState, useEffect } from 'react'
import { validator } from 'utils/validator'
import TextField from 'components/common/form/textField'
import { useDispatch } from 'react-redux'
import { signUp } from 'store/user'

const RegisterForm: React.FC = () => {
  const dispatch: any = useDispatch()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState<{ [fieldName: string]: string }>({
    name: '',
    email: '',
    password: '',
  })
  //const [enterError, setEnterError] = useState(null)

  const handleChange = (target: { name: string; value: string | boolean }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))

    //setEnterError(null)
  }

  const validatorConfig = {
    name: {
      isRequired: {
        message: 'Поле обязательно для заполнения',
      },
    },
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
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву',
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число',
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8,
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
    dispatch(signUp(data))
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Ваше имя"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
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
      <button
        className="btn btn-primary w-100 mx-auto"
        type="submit"
        disabled={!isValid}
      >
        Зарегестрироваться
      </button>
    </form>
  )
}

export default RegisterForm
