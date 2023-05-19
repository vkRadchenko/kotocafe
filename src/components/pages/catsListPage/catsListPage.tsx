import React, { useState, useEffect } from 'react'
import CardCat from 'components/common/cardCat/cardCat'
import Pagination from 'components/common/pagination'
import { paginate } from 'utils/paginate'
import Filter from 'components/blocks/filter/filter'
import api from 'mockData'
import { CatsInterface } from 'components/types/catsInterface'

const CatsListPage: React.FC = () => {
  const [cat, setCat] = useState<CatsInterface[]>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredCatData, setFilteredCatData] = useState<{
    [key: string]: string
  }>({
    sex: '',
    breed: '',
  })
  useEffect(() => {
    api.cats.fetchAll().then((data) => setCat(data))
  }, [])

  const pageSize = 5

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  const handleFilterSelect = (params: { [key: string]: string }) => {
    setFilteredCatData(params)
  }

  if (cat?.length !== 0) {
    const filteredCat = (cat: CatsInterface[]) => {
      const sexItem = cat?.filter((cats) => cats.sex === filteredCatData.sex)
      const breedItem = cat?.filter(
        (cats) => cats.breed === filteredCatData.breed
      )
      const allFilter = cat?.filter(
        (cats) =>
          cats.sex === filteredCatData.sex &&
          cats.breed === filteredCatData.breed
      )

      if (filteredCatData.sex !== '' && filteredCatData.breed === '')
        return sexItem
      if (filteredCatData.sex !== '' && filteredCatData.breed !== '')
        return allFilter
      if (filteredCatData.breed !== '' && filteredCatData.sex === '')
        return breedItem
      else return cat
    }

    const filteredCatsList = filteredCat(cat as CatsInterface[])
    const count = filteredCatsList?.length

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
                {cropCatsList?.map((cat: CatsInterface) => (
                  <CardCat
                    name={cat.name}
                    history={cat.history}
                    periodInShelter={cat.periodInShelter}
                    sex={cat.sex}
                    key={cat.id}
                  />
                ))}
              </div>
            </div>
          </div>
          {cat && (
            <Pagination
              currentPage={currentPage}
              itemsCount={count}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </>
    )
  }
  return <h2>'Loading'</h2>
}

export default CatsListPage
