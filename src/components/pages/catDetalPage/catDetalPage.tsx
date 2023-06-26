import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ifd from '../../../img/IMG_9983.jpg'
import { BlockAboutCat } from './styled'
import QualitiesList from 'components/ui/qualities/qualitiesList'
import { useSelector } from 'react-redux'
import { getCatById } from 'store/cats'
import transformStringAge from 'utils/transformStringAge'

type CatDetalProps = {
  catId: string
}

const CatDetalPage: React.FC<CatDetalProps> = ({ catId }) => {
  const currentCat = useSelector(getCatById(catId))
  console.log(currentCat)

  return (
    <>
      {currentCat ? (
        <div className="container flex-grow-1">
          <h2 className="mt-4">Детальная страница</h2>
          <div className="row mt-4">
            <div className="overflow-hidden col-lg-8">
              <Carousel>
                <div>
                  <img src={ifd} alt="" />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={ifd} alt="" />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src={ifd} alt="" />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </div>
            <div className="d-flex flex-lg-column justify-content-between justify-content-lg-start col-lg-4 mb-3 mb-lg-0">
              <div>
                <h2>{currentCat?.name}</h2>
                <span>
                  {`
                  Возраст: ${currentCat?.age}
                  ${transformStringAge(currentCat?.age)}`}
                </span>
              </div>
              <div className="mt-2">
                <h5>Порода</h5>
                <p>{currentCat?.breed}</p>
              </div>
              <div className="mt-2">
                <h5>Здоровье</h5>
                <div>
                  <p>{currentCat?.health}</p>
                </div>
              </div>
              <div className="mt-2">
                <h5>Характер</h5>
                <p>{currentCat?.temper}</p>
              </div>
              <div className="mt-2">
                <h5>Качества</h5>
                <div>
                  {currentCat.qualities && (
                    <QualitiesList qualities={currentCat.qualities} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h2>История</h2>
            <BlockAboutCat>
              <p className="mt-2">{currentCat?.history}</p>
            </BlockAboutCat>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  )
}

export default CatDetalPage
