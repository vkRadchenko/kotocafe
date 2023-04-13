import React, { useState } from 'react'
import { CardImage } from './styled'

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
}) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <CardImage
            src={require('../../../img/base_87716f252d.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{history}</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              Находится в приюте {periodInShelter} год
            </small>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardCat
