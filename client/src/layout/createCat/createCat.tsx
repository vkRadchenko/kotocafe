import AddCatForm from 'components/ui/addCatForm'

const CreateCat = () => {
  return (
    <>
      <div className="container d-flex align-items-center flex-grow-1">
        <div className="mx-auto col-md-5 ofset-md-3 shadow p-4">
          <h3 className="mb-4">Создание объявления</h3>
          <AddCatForm />
        </div>
      </div>
    </>
  )
}

export default CreateCat
