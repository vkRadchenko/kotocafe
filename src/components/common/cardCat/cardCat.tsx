import React, { useState } from 'react'
import { CardImage, CardWrapper, Like } from './styled'

interface I_CatCardProps {
  id: string
  name: string
  breed: string
  sex: string
  year?: number
  periodInShelter: number
  health: string
  temper: string
  qualities: Array<string>
  history: string
}

const CardCat: React.FC<I_CatCardProps> = ({
  name,
  history,
  periodInShelter,
  sex,
}) => {
  const [favorits, setFavorits] = useState(false)

  const handleHeartClick = () => {
    setFavorits((prevState) => !prevState)
  }

  return (
    <>
      <div className="col ">
        <CardWrapper className="card h-100 position-relative">
          <CardImage
            src={require('../../../img/base_87716f252d.jpg')}
            className="card-img-top"
            alt="..."
          />
          <Like
            onClick={handleHeartClick}
            className={`bi ${
              !favorits ? 'bi-heart' : 'bi-heart-fill text-danger'
            } fs-3 pe-2`}
          />
          <div
            className="card-body overflow-y-hidden"
            style={{ height: '200px' }}
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="">{name}</h5>
              <span className="d-block text-secondary">{sex}</span>
            </div>

            <p className="card-text ">{history}</p>
          </div>
          <div className="ps-3 mb-2 mt-2">
            <a href="/" className="card-link text-primary">
              Подробнее
            </a>
          </div>
          <div className="card-footer bg-white">
            <small className="text-body-secondary">
              Находится в приюте {periodInShelter} год
            </small>
          </div>
        </CardWrapper>
      </div>
    </>
  )
}

export default CardCat
