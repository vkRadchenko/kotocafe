import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataStatus, loadCatsList } from 'store/cats'
import SpinnerLoader from '../spinnerLoader'

const CatsLoader = ({ children }: any) => {
  const dataStatus = useSelector(getDataStatus())
  const dispatch: any = useDispatch()
  useEffect(() => {
    if (!dataStatus) dispatch(loadCatsList)
  }, [])
  if (!dataStatus) return <SpinnerLoader />
  return children
}

export default CatsLoader
