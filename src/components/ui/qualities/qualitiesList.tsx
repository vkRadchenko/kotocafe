import { useSelector } from 'react-redux'
import {
  QualityProps,
  getQualitiesById,
  qualitiesLoadingStatus,
} from 'store/qualities'
import Quality from './quality'

interface QualList {
  qualities: [string]
}

const QualitiesList: React.FC<QualList> = ({ qualities }) => {
  const isLoading = useSelector(qualitiesLoadingStatus())
  const qualitiesList = useSelector(getQualitiesById(qualities))

  return (
    <>
      {!isLoading &&
        qualitiesList.map((qual: QualityProps) => (
          <Quality key={qual._id} {...qual} />
        ))}
    </>
  )
}

export default QualitiesList
