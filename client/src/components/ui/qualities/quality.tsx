import { QualityProps } from 'store/qualities'

const Quality: React.FC<QualityProps> = ({ _id, color, name }) => {
  return <span className={`me-1 badge  text-bg-${color} ${_id}`}>{name}</span>
}

export default Quality
