import React, { useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import qualitiesService from '../services/qualities.service'

interface QualitiesProviderProps {
  children: React.ReactNode
}
interface QualitiesContextValue {}

const QualitiesContext = React.createContext<QualitiesContextValue | undefined>(
  undefined
)

export const useQualities = () => {
  return useContext(QualitiesContext)
}

export const QualitiesProvider: React.FC<QualitiesProviderProps> = ({
  children,
}) => {
  const [isLoading, setLoading] = useState(true)
  const [qualities, setQualities] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (error !== null) {
      toast.error(error)
      setError(null)
    }
  }, [])

  useEffect(() => {
    getQualitiesList()
  }, [])

  function getQualities(id: any) {
    return qualities.find((q: any) => q._id === id)
  }

  async function getQualitiesList() {
    try {
      const { content } = await qualitiesService.fetchAll()
      setQualities(content)
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
    <QualitiesContext.Provider value={{ isLoading, qualities }}>
      {children}
    </QualitiesContext.Provider>
  )
}
