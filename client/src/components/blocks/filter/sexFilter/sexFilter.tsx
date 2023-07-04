import InputSex from './inputSex'

type sexFilter = {
  onSexChange: (params: string) => void
  clearFilter: string
}

enum catSex {
  female = 'Кошка',
  male = 'Кот',
}

const SexFilter: React.FC<sexFilter> = ({ onSexChange, clearFilter }) => {
  const handleInputSex = (params: string) => {
    onSexChange(params)
  }

  return (
    <div className="col">
      <p className="mb-2 fw-bold">Выберите пол</p>
      <InputSex
        type={'radio'}
        name={'inlineRadioOptions'}
        id={'inlineRadio1'}
        value={''}
        checked={clearFilter === ''}
        labelContent={'Все'}
        onInputChange={handleInputSex}
      />
      <InputSex
        type={'radio'}
        name={'inlineRadioOptions'}
        id={'inlineRadio2'}
        value={catSex.female}
        checked={clearFilter === 'Кошка'}
        labelContent={'Кошки'}
        onInputChange={handleInputSex}
      />
      <InputSex
        type={'radio'}
        name={'inlineRadioOptions'}
        id={'inlineRadio3'}
        value={catSex.male}
        checked={clearFilter === 'Кот'}
        labelContent={'Коты'}
        onInputChange={handleInputSex}
      />
    </div>
  )
}

export default SexFilter
