import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loadBreeds } from 'store/breed'
import { catImageService, loadCatsList } from 'store/cats'
import { loadQualitiesList } from 'store/qualities'
import { getIsLoggedIn, getUserData } from 'store/user'

interface AppLoaderProps {
  children: React.ReactNode
}

const AppLoader: FC<AppLoaderProps> = ({ children }) => {
  const dispatch: any = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn())

  useEffect(() => {
    dispatch(loadQualitiesList())
    dispatch(loadCatsList())
    dispatch(loadBreeds())
    dispatch(catImageService())
    if (isLoggedIn) {
      dispatch(getUserData())
    }
  }, [dispatch, isLoggedIn])

  return <>{children}</>
}

export default AppLoader
