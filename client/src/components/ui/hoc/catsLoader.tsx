import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataStatus, loadCatsList } from 'store/cats'
import SpinnerLoader from '../spinnerLoader'

interface CatsLoaderProps {
  children: React.ReactNode
}

const CatsLoader: React.FC<CatsLoaderProps> = ({ children }) => {
  const dataStatus = useSelector(getDataStatus())
  const dispatch: any = useDispatch()

  useEffect(() => {
    if (!dataStatus) dispatch(loadCatsList)
  }, [])
  if (!dataStatus) return <SpinnerLoader />
  return <>{children}</>
}

export default CatsLoader
