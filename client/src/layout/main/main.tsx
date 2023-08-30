import { ImgCatHome, MainWraper } from './styled'
import cotImg from './../../img/catDraw.svg'
const Main = () => {
  return (
    <>
      <MainWraper className="container d-flex">
        <div className="row align-items-center">
          <div className="col-6">
            <h1 className="display-5">
              Котокафе - кошки и котята в добрые руки
            </h1>
            <p className="mt-3 lead">
              Сделать любого из них счастливым просто – приютите мурлыку, и
              преданное сердце ответит теплом за доброту!
            </p>
          </div>
          <div className="col-6">
            <ImgCatHome src={cotImg} alt="" />
          </div>
        </div>
      </MainWraper>
    </>
  )
}

export default Main
