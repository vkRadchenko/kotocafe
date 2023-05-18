import { useParams } from 'react-router-dom'
import { CatsWrapper } from './styled'
import CatsListPage from 'components/pages/catsListPage/catsListPage'
import CatDetalPage from 'components/pages/catDetalPage/catDetalPage'

const Cats: React.FC = () => {
  const params = useParams()
  const { catId } = params

  return (
    <>
      {catId ? (
        <CatDetalPage catId={catId} />
      ) : (
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
      )}
    </>
  )
}
export default Cats
