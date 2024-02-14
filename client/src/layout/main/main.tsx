import { ImgCatHome, MainWraper } from './styled';
import cotImg from './../../img/catDraw.svg';
import Button from 'components/ui/button';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <>
      <MainWraper className="container d-flex">
        <div className="d-flex flex-md-row align-items-center flex-column-reverse justify-content-center">
          <div className="col-md-6 col-12 text-center text-md-start mt-md-0 mt-4">
            <h1 className="">Котокафе - кошки и котята в добрые руки</h1>
            <p className="mt-3 lead">
              Сделать любого из них счастливым просто – приютите мурлыку, и
              преданное сердце ответит теплом за доброту!
            </p>
            <Link to="/login">
              <Button type="button" className="mt-4" size="lg">
                Зарегестрироваться
              </Button>
            </Link>
            <p className="mt-1 fs-8 fw-light">
              Чтобы добавлять свои объявления
            </p>
          </div>
          <div className="col-md-6 col-12">
            <ImgCatHome src={cotImg} alt="" />
          </div>
        </div>
      </MainWraper>
    </>
  );
};

export default Main;
