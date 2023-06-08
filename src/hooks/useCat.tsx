import { nanoid } from 'nanoid'
import React, { useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import catService from 'services/cat.service'
import { useAuth } from './useAuth'
import axios from 'axios'

interface CatProviderProps {
  children: React.ReactNode
}
interface CatContextValue {}

const CatContext = React.createContext<CatContextValue | undefined>(undefined)

export const useCat = () => {
  return useContext(CatContext)
}

export const CatProvider: React.FC<CatProviderProps> = ({ children }) => {
  const { currentUser }: any = useAuth()
  const [cats, setCats]: any = useState([])
  const [dataImgCat, setDataImgCat] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCats()
    getCatImg()
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
      setLoading(false)
      setCats(content)
    } catch (error) {
      errorCatcher(error)
    }
  }
  async function signUpCat(data: any) {
    const catData = {
      ...data,
      _id: nanoid(),
      create_at: Date.now(),
      userId: currentUser._id,
      image: dataImgCat,
    }
    try {
      const { content } = await catService.createCat(catData)
      setCats(content)
    } catch (error: any) {
      errorCatcher(error)
    }
  }

  async function getCatImg() {
    try {
      const { data } = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
      )
      const [content]: any = data
      setDataImgCat(content.url)
    } catch (error) {
      console.error(error)
    }
  }

  function getCatById(catId: string) {
    return cats.find((c: any) => c._id === catId)
  }
  function getCatByUserId(userId: string) {
    return cats.filter((c: any) => c.userId === userId)
  }

  function errorCatcher(error: any) {
    const { message } = error.response.data
    setError(message)
    setLoading(false)
  }

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

  return (
    <CatContext.Provider
      value={{ cats, signUpCat, getCatById, getCatByUserId }}
    >
      {!isLoading ? children : 'Loading...'}
    </CatContext.Provider>
  )
}
