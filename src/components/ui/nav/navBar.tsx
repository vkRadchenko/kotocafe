import lpgpPng from './img/cat_logo.png'
import { Logo } from './styled'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Logo src={lpgpPng} alt="logo" />
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Главная
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Наши животные
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Помочь
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Контакты
            </a>
          </li>
        </ul>
        <div className="d-flex">Login</div>
      </div>
    </nav>
  )
}

export default NavBar
