import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  QualityProps,
  getQualitiesById,
  loadQualitiesList,
  qualitiesLoadingStatus,
} from 'store/qualities';
import Quality from './quality';

interface QualList {
  qualities: string[];
}

const QualitiesList: React.FC<QualList> = ({ qualities }) => {
  const dispatch: any = useDispatch();
  const isLoading = useSelector(qualitiesLoadingStatus());
  const qualitiesList = useSelector(getQualitiesById(qualities));
  useEffect(() => {
    dispatch(loadQualitiesList());
  }, []);
  if (isLoading) return <p>...Loading</p>;
  return (
    <>
      {qualitiesList.map((qual: QualityProps) => (
        <Quality key={qual._id} {...qual} />
      ))}
    </>
  );
};

export default QualitiesList;
