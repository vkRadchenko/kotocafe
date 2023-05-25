import React, { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ifd from '../../../img/IMG_9983.jpg'
import { BlockAboutCat } from './styled'
import api from 'mockData'
import { CatsInterface } from 'components/types/catsInterface'
import { CatQualities } from 'components/types/catQualities'

type CatDetalProps = {
  catId: string
}

const CatDetalPage: React.FC<CatDetalProps> = ({ catId }) => {
  const [currentCat, setCurrentCat] = useState<CatsInterface>()

  useEffect(() => {
    api.cats.getById(catId).then((data) => setCurrentCat(data))
  }, [])

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
                {/*     <div>
                  {currentCat?.qualities?.map((qual: CatQualities) => (
                    <span
                      key={qual._id}
                      className={`me-1 badge text-bg-${qual.color}`}
                    >
                      {qual.name}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <h2>История</h2>
            <BlockAboutCat>
              <p className="mt-2">
                Она грациозна, степенна и как Снежная Королева, кажется такой
                недоступной. Хотя, чему тут удивляться. Если жить долгое время
                на улице, где страшно, холодно и так одиноко, волей не волей,
                станешь холодной и недоступной.
              </p>
              <p className="mt-2">
                История кошечки Снежаны очень простая: жила на улице, попала в
                приют по программе отлова. Сегодня девочка учится жить рядом с
                человеком и доверять. А это, ох, как не просто! Мы не знаем,
                через какие испытания прошла эта девочка. Скорее всего, она
                могла бы рассказать нам, про тяжесть выживания на улице, про
                голод, про одиночество. Но сейчас самое главное помочь малышке
                обрести долгожданное спокойствие. Для Снежаны очень важно
                поверить в человеческую доброту и любовь.
              </p>
              <p className="mt-2">
                Если вас тронула история белоснежной красавицы, и вы готовы
                принять участие в её судьбе, то скорее пишите нам. А если, вы
                считаете, что Снежана для вас долгожданное счастье, то будем
                очень-очень рады познакомиться.
              </p>
              <p className="mt-2">
                Снежана 2019 года рождения, привита, стерилизована, есть
                паспорт. Анализы на лейкоз и иммунодефицит отрицательные.
                Пристраивается в Москву и МО по договору ответственного
                содержания, с ненавязчивым отслеживанием дальнейшей судьбы.
              </p>
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
