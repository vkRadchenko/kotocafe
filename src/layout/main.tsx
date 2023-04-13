import { MainWrapper } from './styled'
import CatsListPage from 'components/pages/catsListPage/catsListPage'

const Main: React.FC = () => (
  <MainWrapper>
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className="mb-4">Наши животные</h1>

        <div className="col-9">
          <CatsListPage />
        </div>
      </div>
    </div>
  </MainWrapper>
)
export default Main
