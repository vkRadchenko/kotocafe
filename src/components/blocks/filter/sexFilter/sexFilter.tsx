import InputSex from './inputSex'

type sexFilter = {
  onSexChange: (params: string) => void
}

enum catSex {
  female = 'Кошка',
  male = 'Кот',
}

const SexFilter: React.FC<sexFilter> = ({ onSexChange }) => {
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
        defaultChecked
        labelContent={'Все'}
        onInputClick={handleInputSex}
      />
      <InputSex
        type={'radio'}
        name={'inlineRadioOptions'}
        id={'inlineRadio2'}
        value={catSex.female}
        labelContent={'Кошки'}
        onInputClick={handleInputSex}
      />
      <InputSex
        type={'radio'}
        name={'inlineRadioOptions'}
        id={'inlineRadio3'}
        value={catSex.male}
        labelContent={'Коты'}
        onInputClick={handleInputSex}
      />
    </div>
  )
}

export default SexFilter
