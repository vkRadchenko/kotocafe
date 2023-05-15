import { ImgNotFound } from './styled'
import img404 from '../../img/404_img.png'

const NotFoundPage: React.FC = () => {
  return (
    <div className="container text-center flex-grow-1">
      <ImgNotFound src={img404} />
      <div className="mt-5 ">
        <h1>Уупс — что-то пошло не так!</h1>
        <p>К сожалению мы не нашли нужную вам страницу.</p>
      </div>
    </div>
  )
}

export default NotFoundPage
