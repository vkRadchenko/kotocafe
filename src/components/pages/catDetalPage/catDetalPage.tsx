import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ifd from '../../../img/IMG_9983.jpg'
import { BlockAboutCat } from './styled'
import { useCat } from 'hooks/useCat'

type CatDetalProps = {
  catId: string
}

const CatDetalPage: React.FC<CatDetalProps> = ({ catId }) => {
  const { getCatById }: any = useCat()
  const currentCat = getCatById(catId)

  return (
    <>
      {currentCat ? (
        <div className="container flex-grow-1">
          <h2>Cat Detal Page</h2>
          <div className="row">
            <div className="overflow-hidden col-lg-8">
              <Carousel>
                <div>
                  <img src={ifd} />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={ifd} />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src={ifd} />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </div>
            <div className="col-lg-4">
              <div>
                <h2>{currentCat?.name}</h2>
                <span>Возраст: {currentCat?.year} год</span>
              </div>
              <div className="mt-2">
                <h5>Порода</h5>
                <p>{currentCat?.breed}</p>
              </div>
              <div className="mt-2">
                <h5>Находится в приюте</h5>
                <p>{currentCat?.periodInShelter} месяц</p>
              </div>
              <div className="mt-2">
                <h5>Здоровье</h5>
                <div>
                  <span className="badge text-bg-success">
                    {currentCat?.health}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <h5>Характер</h5>
                <p>{currentCat?.temper}</p>
              </div>
              <div className="mt-2">
                <h5>Качества</h5>
                <div>
                  {/*  {currentCat?.qualities?.map((qual: any) => (
                    <span className={`me-1 badge text-bg-${qual.color}`}>
                      {qual.name}
                    </span>
                  ))} */}
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
