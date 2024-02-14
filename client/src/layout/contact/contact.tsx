import { YMaps, Map } from '@pbe/react-yandex-maps';

const Contact: React.FC = () => {
  return (
    <YMaps>
      <div className="container flex-grow-1">
        <h2 className="mt-5"> Наши Контакты</h2>
        <div className="d-flex flex-column-reverse flex-md-row mt-4">
          <div className=" col-12 mt-5 mt-md-0 col-md-4">
            <div>
              <h4 className="mb-2">Адрес</h4>
              <p>344004 Россия, Ростов-на-Дону</p>
              <p>проспект Ленина, 150</p>
            </div>
            <div className="mt-2">
              <h4 className="mb-2">Телефон</h4>
              <p>8(863)223-54-32</p>
            </div>
            <div className="mt-2">
              <h4 className="mb-2">Часы посещения</h4>
              <p>пн-пт: 11:00-18:00</p>
              <p>сб-вс: 12:00-19:00</p>
            </div>
          </div>

          <div className="mt-2 col-12 col-md-8">
            <div className="">
              <Map
                width={'100%'}
                height={300}
                defaultState={{ center: [47.22, 39.72], zoom: 12 }}
              />
            </div>
          </div>
        </div>
      </div>
    </YMaps>
  );
};

export default Contact;
