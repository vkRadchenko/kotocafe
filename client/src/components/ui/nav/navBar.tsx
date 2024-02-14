import logoImg from './../../../img/catLogo.svg';
import { LoginWrap, Logo, LogoText, NavLinkCustom } from './styled';
import { Link } from 'react-router-dom';
import NavProfile from '../navProfile/navProfile';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'store/user';
import Button from '../button/button';
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [burgerClick, setBurgerClick] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn());
  const screenWidth = window.screen.width;
  console.log(screenWidth);

  const handleBurgerAction = () => {
    if (screenWidth <= 768) {
      setBurgerClick((prevstate) => !prevstate);
    }
  };

  return (
    <nav className="navbar bg-body-tertiary navbar-expand-md">
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
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={handleBurgerAction}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end ${
            burgerClick ? 'show' : ''
          } justify-content-between`}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand" to="/">
              <div className="d-flex align-items-center">
                <Logo src={logoImg} alt="logo" onClick={handleBurgerAction} />
              </div>
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={handleBurgerAction}
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column flex-md-row">
            <NavLinkCustom>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleBurgerAction}>
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/cats"
                  onClick={handleBurgerAction}
                >
                  Наши животные
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={handleBurgerAction}
                >
                  Контакты
                </Link>
              </li>
            </NavLinkCustom>

            <div
              className={`d-flex align-items-center flex-column flex-md-row ${
                burgerClick
                  ? 'justify-content-center'
                  : 'justify-content-between'
              }`}
            >
              {isLoggedIn ? (
                <>
                  <Link to={'/additem'}>
                    <Button
                      type="button"
                      size="sm"
                      onClick={handleBurgerAction}
                    >
                      Добавить животное
                    </Button>
                  </Link>
                  <NavProfile />
                </>
              ) : (
                <Link className="nav-link text-secondary" to="/login">
                  <LoginWrap onClick={handleBurgerAction}>Войти</LoginWrap>
                </Link>
              )}
            </div>
          </div>
        </div>
        {burgerClick && (
          <div
            className="offcanvas-backdrop fade show"
            onClick={handleBurgerAction}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
