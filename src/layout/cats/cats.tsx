import { CatsWrapper } from './styled'
import CatsListPage from 'components/pages/catsListPage/catsListPage'

const Cats: React.FC = () => (
  <CatsWrapper>
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className="mb-4 fw-bold">Наши животные</h1>
        <h3 className="mb-3 fw-bold">Фильтр</h3>
        <div className="col-12">
          <CatsListPage />
        </div>
      </div>
    </div>
  </CatsWrapper>
)
export default Cats
