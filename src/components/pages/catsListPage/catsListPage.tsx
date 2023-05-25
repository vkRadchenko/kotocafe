import React, { useState, useEffect } from 'react'
import CardCat from 'components/common/cardCat/cardCat'
import Pagination from 'components/common/pagination'
import { paginate } from 'utils/paginate'
import Filter from 'components/blocks/filter/filter'
import { CatsInterface } from 'components/types/catsInterface'
import { useCat } from 'hooks/useCat'

const CatsListPage: React.FC = () => {
  //const [cat, setCat] = useState<CatsInterface[]>()
  const { cats }: any = useCat()

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredCatData, setFilteredCatData] = useState<{
    [key: string]: string
  }>({
    sex: '',
    breed: '',
  })

  const pageSize = 6

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  const handleFilterSelect = (params: { [key: string]: string }) => {
    setFilteredCatData(params)
  }

  if (cats?.length !== 0) {
    const filteredCat = (cats: CatsInterface[]) => {
      const sexItem = cats?.filter((cat) => cat.sex === filteredCatData.sex)
      const breedItem = cats?.filter(
        (cat) => cat.breed === filteredCatData.breed
      )
      const allFilter = cats?.filter(
        (cat) =>
          cat.sex === filteredCatData.sex && cat.breed === filteredCatData.breed
      )

      if (filteredCatData.sex !== '' && filteredCatData.breed === '')
        return sexItem
      if (filteredCatData.sex !== '' && filteredCatData.breed !== '')
        return allFilter
      if (filteredCatData.breed !== '' && filteredCatData.sex === '')
        return breedItem
      else return cats
    }

    const filteredCatsList = filteredCat(cats as CatsInterface[])
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
                    key={cat._id}
                    id={cat._id}
                  />
                ))}
              </div>
            </div>
          </div>
          {cats && (
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
