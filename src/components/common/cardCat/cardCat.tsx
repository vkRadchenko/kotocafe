import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardImage, CardWrapper, Like } from './styled'
import { CatsInterface } from 'components/types/catsInterface'

interface CardCat {
  name: string
  history: string
  periodInShelter: number
  sex: string
  id: string
}

const CardCat: React.FC<CardCat> = ({
  name,
  history,
  periodInShelter,
  sex,
  id,
}) => {
  const [favorits, setFavorits] = useState(false)
  const navigate = useNavigate()
  const handleHeartClick = () => {
    setFavorits((prevState) => !prevState)
  }
  const handleCardClick = (params: any) => {
    navigate(`/cats/${id}`)
  }

  return (
    <>
      <div className="col">
        <CardWrapper
          className="card h-100 position-relative"
          onClick={handleCardClick}
        >
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
