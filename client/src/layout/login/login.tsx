import LoginForm from 'components/ui/loginForm'
import RegisterForm from 'components/ui/registerForm'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Login: React.FC = () => {
  const { type } = useParams()
  const [formType, setFormType] = useState<'register' | 'login'>(
    type === 'register' ? type : 'login'
  )

  const handleToggleFormType = () => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    )
  }

  return (
    <div className="container d-flex align-items-center flex-grow-1">
      <div className="mx-auto col-md-5 ofset-md-3 shadow p-4">
        <h3 className="mb-4">
          {formType === 'register' ? 'Регистрация' : 'Вход'}
        </h3>
        {formType === 'register' ? (
          <>
            <RegisterForm />
            <p className="text-center mt-3 ">
              У вас уже есть аккаунт?
              <a className="ms-2" role="button" onClick={handleToggleFormType}>
                Войти
              </a>
            </p>
          </>
        ) : (
          <>
            <LoginForm />
            <p className="text-center mt-3">
              У вас еще нет аккаунта?
              <a className="ms-2" role="button" onClick={handleToggleFormType}>
                Регистрация
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
