import React, { useEffect, useState } from 'react'
import CardCat from 'components/common/cardCat/cardCat'
import Pagination from 'components/common/pagination'
import initialCats from 'mockData/cats'
import { paginate } from 'utils/paginate'
import Filter from 'components/blocks/filter/filter'

const CatsListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredCatData, setFilteredCatData] = useState({ sex: '', breed: '' })
  const catsLenght = initialCats.length
  const pageSize = 5

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  const handleFilterSelect = (params: any) => {
    setFilteredCatData(params)
  }

  const filteredCat = () => {
    const sexItem = initialCats.filter((cat) => cat.sex === filteredCatData.sex)
    const breedItem = initialCats.filter(
      (cat) => cat.breed === filteredCatData.breed
    )
    const allFilter = initialCats.filter(
      (cat) =>
        cat.sex === filteredCatData.sex && cat.breed === filteredCatData.breed
    )

    if (filteredCatData.sex !== '' && filteredCatData.breed === '')
      return sexItem
    if (filteredCatData.sex !== '' && filteredCatData.breed !== '')
      return allFilter
    if (filteredCatData.breed !== '' && filteredCatData.sex === '')
      return breedItem
    else return initialCats
  }

  const filteredCatsList = filteredCat()

  const cropCatsList = paginate(filteredCatsList, currentPage, pageSize)

  return (
    <>
      <div className="container overflow-hidden">
        <div className="row">
          <div
            style={{ height: 'fit-content' }}
            className="col-3 border rounded pt-3 pb-3"
          >
            <Filter onCatSelect={handleFilterSelect} />
          </div>
          <div className="col-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {catsLenght > 0 &&
                cropCatsList.map((cat) => <CardCat {...cat} key={cat.id} />)}
            </div>
          </div>
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
