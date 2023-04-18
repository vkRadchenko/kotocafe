type paginate = {
  currentPage: number
  itemsCount: number
  pageSize: number
  onPageChange: (pageIndex: number) => void
}

const Pagination: React.FC<paginate> = ({
  currentPage,
  itemsCount,
  pageSize,
  onPageChange,
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (pageCount === 1) return null
  const arrNum: Array<number> = [...Array(pageCount).keys()].map(
    (i: number) => i + 1
  )

  return (
    <>
      <ul className="pagination mt-4 justify-content-center">
        {arrNum.map((page) => (
          <li
            key={'page_' + page}
            className={`page-item ${page === currentPage ? 'active' : ''}`}
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pagination
