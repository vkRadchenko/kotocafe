import { useState } from 'react'

import { useAuth } from 'hooks/useAuth'
import { Link } from 'react-router-dom'

const NavProfile = () => {
  const { currentUser }: any = useAuth()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const hundleToggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className="dropdown" onClick={hundleToggleMenu}>
      <div className="dropdown btn dropdown-toggle d-flex align-items-center">
        <div className="me-2">{currentUser.name}</div>
        <img
          src={currentUser.image}
          alt="avatar"
          className="img img-responsive rounded-circle"
          width="35"
          height="35"
        />
      </div>
      <div className={`w-100 dropdown-menu ${isOpen ? 'show' : ''}`}>
        <Link to={`/users/${currentUser._id}`} className="dropdown-item">
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