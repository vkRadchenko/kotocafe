import React, { useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import userService from 'services/user.service'
import localStorageService, { setTokens } from 'services/localStorage.service'
import { useNavigate } from 'react-router-dom'

interface AuthProviderProps {
  children: React.ReactNode
}
interface AuthContextValue {}

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined)

export const httpAuth = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1/`,
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY,
  },
})

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setUser] = useState<any>()
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate()

  async function logIn({ email, password }: { [key: string]: string }) {
    try {
      const { data } = await httpAuth.post(`accounts:signInWithPassword`, {
        email,
        password,
        returnSecureToken: true,
      })
      setTokens(data)
      getUserData()
    } catch (error: any) {
      errorCatcher(error)
      const { code, message } = error.response.data.error
      if (code === 400) {
        if (message === 'INVALID_PASSWORD') {
          throw new Error('Email или пароль введены не корректно')
        }
      }
    }
  }

  function logOut() {
    localStorageService.removeAuthData()
    setUser(null)
    navigate('/')
  }

  async function signUp({
    email,
    password,
    ...rest
  }: {
    [key: string]: string
  }) {
    try {
      const { data } = await httpAuth.post(`accounts:signUp`, {
        email,
        password,
        returnSecureToken: true,
      })
      setTokens(data)
      await createUser({
        _id: data.localId,
        email,
        image: `https://api.dicebear.com/api/avataaars/${(Math.random() + 1)
          .toString(36)
          .substring(7)}.svg`,
        ...rest,
      })
    } catch (error: any) {
      errorCatcher(error)
      const { code, message } = error.response.data.error
      if (code === 400) {
        if (message === 'EMAIL_EXISTS') {
          const errorObject = {
            email: 'Пользователь с таким email уже существует',
          }
          throw errorObject
        }
      }
    }
  }

  async function createUser(data: any) {
    try {
      const { content }: any = await userService.create(data)
      await setUser(content)
    } catch (error) {
      errorCatcher(error)
    }
  }

  function errorCatcher(error: any) {
    const { message } = error.response.data
    setError(message)
  }

  async function getUserData() {
    try {
      const { content } = await userService.getCurrentUser()
      setUser(content)
    } catch (error) {
      errorCatcher(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData()
    } else {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, currentUser }}>
      {!isLoading ? children : 'Loading'}
    </AuthContext.Provider>
  )
}

export default AuthProvider
