import CardCat from 'components/common/cardCat/cardCat'
import initialCats from 'mockData/cats'

const CatsListPage: React.FC = () => {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {initialCats.map((cat) => (
            <CardCat {...cat} key={cat.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CatsListPage
