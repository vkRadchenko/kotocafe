import React, { useState } from 'react'
import CardCat from 'components/common/cardCat/cardCat'
import Pagination from 'components/common/pagination'
import initialCats from 'mockData/cats'
import { paginate } from 'utils/paginate'

const CatsListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const catsLenght = initialCats.length
  const pageSize = 3

  const handlePageChange = (pageIndex: number) => {
    console.log(pageIndex)
    setCurrentPage(pageIndex)
  }

  const cropCatsList = paginate(initialCats, currentPage, pageSize)

  return (
    <>
      <div className="container overflow-hidden">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {catsLenght > 0 &&
            cropCatsList.map((cat) => <CardCat {...cat} key={cat.id} />)}
        </div>
        <Pagination
          currentPage={currentPage}
          itemsCount={catsLenght}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default CatsListPage
