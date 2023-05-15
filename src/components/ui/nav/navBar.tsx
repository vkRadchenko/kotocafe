import lpgpPng from './img/cat_logo.png'
import { Logo } from './styled'
import { Link } from 'react-router-dom'
const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <Logo src={lpgpPng} alt="logo" />
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Наши животные
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Контакты
            </Link>
          </li>
        </ul>
        <div className="d-flex">Login</div>
      </div>
    </nav>
  )
}

export default NavBar
