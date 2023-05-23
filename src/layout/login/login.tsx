import LoginForm from 'components/ui/loginForm'

const Login: React.FC = () => {
  return (
    <div className="container d-flex align-items-center  flex-grow-1">
      <div className="mx-auto col-4">{<LoginForm />}</div>
    </div>
  )
}

export default Login
