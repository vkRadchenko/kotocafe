import React, { useState, useCallback } from 'react'
import TextField from 'components/common/form/textField'
import TextAreaField from 'components/common/form/textAreaField'
import RadioField from 'components/common/form/radioField'
import RangeField from 'components/common/form/rangeField'
import MultiSelectField from 'components/common/form/multiSelectField'
import { getQualities } from 'store/qualities'
import { useSelector, useDispatch } from 'react-redux'
import { getCatImage, signUpCat } from 'store/cats'
import { getCurrentUserId } from 'store/user'
import { getBreeds } from 'store/breed'
import Button from './button/button'

export interface Data {
  name: string
  breed: { label: string; value: string } | null
  sex: string
  age: string
  health: string
  temper: string
  history: string
  qualities: []
  userId: string
}

const AddCatForm: React.FC = () => {
  const dispatch: any = useDispatch()
  const qualities = useSelector(getQualities())
  const breed = useSelector(getBreeds())
  const currentUser = useSelector(getCurrentUserId())
  const catImg = useSelector(getCatImage())

  const [data, setData] = useState<Data>({
    name: '',
    breed: null,
    sex: '',
    age: '0',
    health: '',
    temper: '',
    history: '',
    qualities: [],
    userId: currentUser,
  })

  const getQualitiesList = qualities?.map(
    (q: { name: string; _id: string }) => ({
      label: q.name,
      value: q._id,
    })
  )

  const getBreedsList = breed?.map((b: { name: string; _id: string }) => ({
    label: b.name,
    value: b._id,
  }))
  const handleChange = useCallback(
    (target: { name: string; value: string | boolean }) => {
      setData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }))
    },
    []
  )

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const newData = {
      ...data,
      qualities: data.qualities.map((q: { value: string }) => q.value),
      breed: data.breed?.label,
      image: catImg,
    }

    dispatch(signUpCat(newData))
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Имя"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <MultiSelectField
        options={getBreedsList}
        onChange={handleChange}
        defaultValue={data.breed}
        name="breed"
        label="Выберите породу"
        isMulti={false}
        closeMenuOnSelect={true}
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
      <Button size="md" type="submit" block>
        Разместить объявление
      </Button>
    </form>
  )
}

export default AddCatForm
