import lpgpPng from './img/cat_logo.png'
import { LoginWrap, Logo } from './styled'
import { Link } from 'react-router-dom'
import NavProfile from '../navProfile'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from 'store/user'

const NavBar: React.FC = () => {
  const isLoggedIn = useSelector(getIsLoggedIn())
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <Logo src={lpgpPng} alt="logo" />
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Главная
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cats">
              Наши животные
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Контакты
            </Link>
          </li>
        </ul>
        <div className="d-flex align-items-center justify-content-between">
          {isLoggedIn ? (
            <>
              <Link to={'/additem'}>
                <button className="btn btn-sm btn-primary me-3">
                  Добавить животное
                </button>
              </Link>
              <NavProfile />
            </>
          ) : (
            <Link className="nav-link" to="/login">
              <LoginWrap>Войти</LoginWrap>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
