import {
  AnyAction,
  Dispatch,
  PayloadAction,
  createAction,
  createSlice,
} from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import { CatsInterface } from 'components/types/catsInterface'
import { rootNavigate } from 'customRouter'
import catService from 'services/cat.service'

interface CatsState {
  entities: CatsInterface[] | null
  isLoading: boolean
  error: string | null
  dataLoaded: boolean
  cardCatImage: null | string
}

const initialState: CatsState = {
  entities: null,
  isLoading: true,
  error: null,
  dataLoaded: false,
  cardCatImage: null,
}

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    catsRequested: (state) => {
      state.isLoading = true
    },
    catsReceved: (state, action: PayloadAction<CatsInterface[]>) => {
      state.entities = action.payload
      state.dataLoaded = true
      state.isLoading = false
    },
    catsRequestFiled: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    catCreated: (state, action: PayloadAction<CatsInterface>) => {
      if (!Array.isArray(state.entities)) {
        state.entities = []
      }
      state.entities.push(action.payload)
    },
    catImageCreated: (state, action: PayloadAction<string>) => {
      state.cardCatImage = action.payload
    },
    catImageRemoved: (state) => {
      state.cardCatImage = null
    },
  },
})

const { reducer: catsReducer, actions } = catsSlice
const {
  catsRequested,
  catsReceved,
  catsRequestFiled,
  catCreated,
  catImageCreated,
  catImageRemoved,
} = actions

const catCreateRequested = createAction('cats/catCreateRequested')
const createCatFaild = createAction<string>('cats/createCatFaild')
const createCatImageRequested = createAction('cats/createCatImageRequested')

export const loadCatsList = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(catsRequested())
  try {
    const { content } = await catService.get()
    dispatch(catsReceved(content))
  } catch (error) {
    dispatch(catsRequestFiled((error as Error).message))
  }
}
export const getCats = () => (state: { cats: CatsState }) => state.cats.entities
export const getCatById = (catId: string) => (state: { cats: CatsState }) => {
  if (state.cats.entities) {
    return state.cats.entities.find((c) => c._id === catId)
  }
}
export const getCatByUserId =
  (userId: string) => (state: { cats: CatsState }) => {
    if (state.cats.entities) {
      return state.cats.entities.filter((c) => c.userId === userId)
    }
  }

export const signUpCat =
  (payload: any) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(catCreateRequested())
    try {
      const { content } = await catService.createCat(payload)
      dispatch(catCreated(content))
      rootNavigate('/cats')
    } catch (error: any) {
      dispatch(createCatFaild(error.message))
    }
  }

export const getDataStatus = () => (state: { cats: CatsState }) =>
  state.cats.dataLoaded

export const catImageService = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(createCatImageRequested())
  try {
    const { data }: AxiosResponse<any> = await axios.get(
      'https://api.thecatapi.com/v1/images/search'
    )
    const [content]: any = data

    dispatch(catImageCreated(content.url))
  } catch (error: any) {
    dispatch(createCatFaild(error.message))
  }
}

export const getCatImage = () => (state: { cats: CatsState }) => {
  return state.cats.cardCatImage ? state.cats.cardCatImage : null
}

export const removeCatImage = () => (dispatch: Dispatch<AnyAction>) => {
  dispatch(catImageRemoved())
}

export default catsReducer
