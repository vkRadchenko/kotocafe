import CardCat from 'components/common/cardCat/cardCat'
import { CatsInterface } from 'components/types/catsInterface'
import { useAuth } from 'hooks/useAuth'
import { useCat } from 'hooks/useCat'
import { displayDate } from 'utils/displayDate'

const UserDetalPage = () => {
  const { getCatByUserId }: any = useCat()
  const { currentUser }: any = useAuth()
  const cats = getCatByUserId(currentUser._id)

  return (
    <>
      {currentUser && (
        <div className="container flex-grow-1">
          <h2 className="mt-4 mb-5">Личный кабинет</h2>
          <div className="row justify-content-center justify-content-sm-start">
            <div className="col-md-3" style={{ height: 'fit-content' }}>
              <h4 className="mb-3">Мои данные</h4>
              <div className="border rounded p-3">
                <div className="text-center">
                  <img
                    className="rounded-circle mx-auto mt-4"
                    src={currentUser.image}
                    alt=""
                    width={120}
                  />
                  <h4 className="mt-2">{currentUser.name}</h4>
                </div>
                <div className="mt-3">
                  <h5>Ваш email</h5>
                  <span>{currentUser?.email}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-9 ">
              <h4 className="mb-3">Мои объявления</h4>
              <div className="row">
                {cats.length === 0
                  ? 'У вас еще нет ни одного объявления'
                  : cats?.map((cat: CatsInterface) => (
                      <CardCat
                        name={cat.name}
                        history={cat.history}
                        periodInShelter={displayDate(cat.create_at)}
                        sex={cat.sex}
                        key={cat._id}
                        id={cat._id}
                        image={cat.image}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserDetalPage
