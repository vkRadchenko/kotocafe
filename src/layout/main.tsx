import Filter from 'components/blocks/filter/filter'
import { MainWrapper } from './styled'
import CatsListPage from 'components/pages/catsListPage/catsListPage'

const Main: React.FC = () => (
  <MainWrapper>
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className="mb-4 fw-bold">Наши животные</h1>
        <h3 className="mb-3 fw-bold">Фильтр</h3>
        <div className="col-12">
          <CatsListPage />
        </div>
      </div>
    </div>
  </MainWrapper>
)
export default Main
