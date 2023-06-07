import { useEffect } from 'react'

import { useAuth } from 'hooks/useAuth'

const LogOut = () => {
  const { logOut }: any = useAuth()
  useEffect(() => {
    logOut()
  }, [])
  return <h4>Loading</h4>
}

export default LogOut
