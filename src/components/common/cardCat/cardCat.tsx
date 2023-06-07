import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardImage, CardWrapper, Like } from './styled'
interface CardCat {
  name: string
  history: string
  periodInShelter: any
  sex: string
  id: string
  image: string
}

const CardCat: React.FC<CardCat> = ({
  name,
  history,
  periodInShelter,
  sex,
  id,
  image,
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
      <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
        <CardWrapper
          className="card h-100 position-relative"
          onClick={handleCardClick}
        >
          <CardImage src={image} className="card-img-top" alt="..." />
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
            <small className="text-body-secondary">{periodInShelter}</small>
          </div>
        </CardWrapper>
      </div>
    </>
  )
}

export default CardCat
