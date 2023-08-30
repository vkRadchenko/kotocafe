import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from 'store/user'

const NavProfile = () => {
  const currentUser = useSelector(getUser())
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const hundleToggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }
  if (!currentUser) return <>Loading...</>
  return (
    <div className="dropdown" onClick={hundleToggleMenu}>
      <div className="dropdown btn dropdown-toggle d-flex align-items-center">
        <div className="me-2 d-md-none d-lg-block">
          <p>{currentUser.name}</p>
        </div>
        <img
          src={currentUser.image}
          alt="avatar"
          className="img img-responsive rounded-circle"
          width="35"
          height="35"
        />
      </div>
      <div className={`w-100 dropdown-menu ${isOpen ? 'show' : ''}`}>
        <Link to={`/user/${currentUser._id}`} className="dropdown-item">
          Профиль
        </Link>
        <Link to={'logout'} className="dropdown-item">
          Выйти
        </Link>
      </div>
    </div>
  )
}

export default NavProfile
