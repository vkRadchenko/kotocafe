import React, { useState } from 'react'
import TextField from 'components/common/form/textField'
import { useNavigate } from 'react-router-dom'
import TextAreaField from 'components/common/form/textAreaField'
import RadioField from 'components/common/form/radioField'
import { useCat } from 'hooks/useCat'
import RangeField from 'components/common/form/rangeField'
import MultiSelectField from 'components/common/form/multiSelectField'
import { useSelector } from 'react-redux'
import { getQualities } from 'store/qualities'

export interface Data {
  name: string
  breed: string
  sex: string
  age: string
  health: string
  temper: string
  history: string
  qualities: []
}

const AddCatForm = () => {
  const { signUpCat }: any = useCat()
  const [data, setData] = useState({
    name: '',
    breed: '',
    sex: '',
    age: '0',
    health: '',
    temper: '',
    history: '',
    qualities: [],
  })
  const navigate = useNavigate()
  const [errors, setErrors] = useState<{ [fieldName: string]: string }>({
    name: '',
  })

  const qualities: any = useSelector(getQualities())

  const getQualitiesList = qualities.map((q: any) => ({
    label: q.name,
    value: q._id,
  }))

  const handleChange = (target: { name: string; value: string | boolean }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const newData = {
      ...data,
      qualities: data.qualities.map((q: any) => q.value),
    }
    try {
      await signUpCat(newData)
      navigate('/')
    } catch (error: any) {
      setErrors(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Имя"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Порода"
        name="breed"
        value={data.breed}
        onChange={handleChange}
      />
      <RangeField
        label="Возраст"
        name="age"
        value={data.age}
        onChange={handleChange}
      />

      <TextField
        label="Здоровье"
        name="health"
        value={data.health}
        onChange={handleChange}
      />
      <TextField
        label="Характер"
        name="temper"
        value={data.temper}
        onChange={handleChange}
      />
      <MultiSelectField
        options={getQualitiesList}
        onChange={handleChange}
        defaultValue={data.qualities}
        name="qualities"
        label="Выберите качества"
      />
      <RadioField
        options={[
          { name: 'Кот', value: 'Кот' },
          { name: 'Кошка', value: 'Кошка' },
        ]}
        value={data.sex}
        name="sex"
        onChange={handleChange}
        label="Выберите пол"
      />
      <TextAreaField
        label="Расскажите о котейке"
        name="history"
        value={data.history}
        onChange={handleChange}
      />

      <button className="btn btn-primary w-100 mx-auto" type="submit">
        Разместить объявление
      </button>
    </form>
  )
}

export default AddCatForm
