import {
  AnyAction,
  Dispatch,
  PayloadAction,
  createAction,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { rootNavigate } from 'customRouter'
import { nanoid } from 'nanoid'
import catService from 'services/cat.service'

interface CatsState {
  entities: null | []
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
    catsReceved: (state, action: any) => {
      state.entities = action.payload
      state.dataLoaded = true
      state.isLoading = false
    },
    catsRequestFiled: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    catCreated: (state: any, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = []
      }
      state.entities.push(action.payload)
    },
    catImageCreated: (state: any, action) => {
      state.cardCatImage = action.payload
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
} = actions

const catCreateRequested = createAction('cats/catCreateRequested')
const createCatFaild = createAction('cats/createCatFaild')
const createCatImageRequested = createAction('cats/createCatImageRequested')
const createCatImgFaild = createAction('cats/createCatImgFaild')

export const loadCatsList =
  () => async (dispatch: Dispatch<AnyAction>, getState: any) => {
    dispatch(catsRequested())
    try {
      const { content } = await catService.get()
      dispatch(catsReceved(content))
    } catch (error) {
      dispatch(catsRequestFiled((error as Error).message))
    }
  }
export const getCats = () => (state: any) => state.cats.entities
export const getCatById = (catId: string) => (state: any) => {
  if (state.cats.entities) {
    return state.cats.entities.find((c: any) => c._id === catId)
  }
}
export const getCatByUserId = (userId: string) => (state: any) => {
  if (state.cats.entities) {
    return state.cats.entities.filter((c: any) => c.userId === userId)
  }
}

export const signUpCat =
  (payload: any) => async (dispatch: Dispatch<AnyAction>) => {
    const catData = {
      ...payload,
      _id: nanoid(),
      create_at: Date.now(),
    }

    dispatch(catCreateRequested())
    try {
      const { content } = await catService.createCat(catData)
      dispatch(catCreated(content))
      rootNavigate('/cats')
    } catch (error: any) {
      dispatch(createCatFaild(error.message))
    }
  }

export const getDataStatus = () => (state: any) => state.cats.dataLoaded

export const catImageService = () => async (dispatch: any) => {
  dispatch(createCatImageRequested())
  try {
    const { data } = await axios.get(
      'https://api.thecatapi.com/v1/images/search'
    )
    const [content]: any = data
    dispatch(catImageCreated(content.url))
  } catch (error: any) {
    dispatch(createCatFaild(error.message))
  }
}
export const getCatImage = () => (state: any) => {
  return state.cats.cardCatImage ? state.cats.cardCatImage : null
}

export default catsReducer
