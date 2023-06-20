import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loadBreeds } from 'store/breed'
import { catImageService, loadCatsList } from 'store/cats'
import { loadQualitiesList } from 'store/qualities'
import { getIsLoggedIn, getUserData } from 'store/user'

const AppLoader = ({ children }: any) => {
  const dispatch: any = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn())
  useEffect(() => {
    dispatch(loadQualitiesList())
    dispatch(loadCatsList())
    dispatch(loadBreeds())
    if (isLoggedIn) {
      dispatch(getUserData())
      dispatch(catImageService())
    }
  }, [isLoggedIn])
  return children
}

export default AppLoader
