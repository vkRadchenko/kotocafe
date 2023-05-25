import React, { useContext, useState, useEffect } from 'react'
import catService from 'services/cat.service'
import { toast } from 'react-toastify'

interface CatProviderProps {
  children: React.ReactNode
}
interface CatContextValue {}

const CatContext = React.createContext<CatContextValue | undefined>(undefined)

const useCat = () => {
  return useContext(CatContext)
}

const CatProvider: React.FC<CatProviderProps> = ({ children }) => {
  const [cats, setCats] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCats()
  }, [])

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

  async function getCats() {
    try {
      const { content } = await catService.get()
      setCats(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }
  function errorCatcher(error: any) {
    const { message } = error.response.data
    setError(message)
    setLoading(false)
  }

  return (
    <CatContext.Provider value={{ cats }}>
      {!isLoading ? children : 'Loading...'}
    </CatContext.Provider>
  )
}

export { useCat, CatProvider }
