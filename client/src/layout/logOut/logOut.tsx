import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from 'store/user'

const LogOut = () => {
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(logOut())
  }, [dispatch])
  return <h4>Loading</h4>
}

export default LogOut
