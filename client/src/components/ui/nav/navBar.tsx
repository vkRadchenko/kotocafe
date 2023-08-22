import logoImg from './../../../img/catLogo.svg'
import { LoginWrap, Logo, LogoText, NavLinkCustom } from './styled'
import { Link } from 'react-router-dom'
import NavProfile from '../navProfile/navProfile'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from 'store/user'
import Button from '../button/button'
import { useState } from 'react'

const NavBar: React.FC = () => {
  const [burgerClick, setBurgerClick] = useState(false)
  const isLoggedIn = useSelector(getIsLoggedIn())

  const handleBurgerAction = () => {
    setBurgerClick((prevstate) => !prevstate)
  }

  return (
    <nav className="navbar bg-light navbar-expand-md">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="d-flex align-items-center">
            <Logo src={logoImg} alt="logo" />
            <LogoText className="">Котокафе</LogoText>
          </div>
        </Link>
        <button
          className={`navbar-toggler ${burgerClick ? '' : 'collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="btn"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleBurgerAction}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            burgerClick ? 'show' : ''
          } justify-content-between`}
          id="btn"
        >
          <NavLinkCustom>
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
          </NavLinkCustom>

          <div
            className={`d-flex align-items-center ${
              burgerClick ? 'justify-content-center' : 'justify-content-between'
            }`}
          >
            {isLoggedIn ? (
              <>
                <Link to={'/additem'}>
                  <Button type="button" size="sm">
                    Добавить животное
                  </Button>
                </Link>
                <NavProfile />
              </>
            ) : (
              <Link className="nav-link text-secondary" to="/login">
                <LoginWrap>Войти</LoginWrap>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
