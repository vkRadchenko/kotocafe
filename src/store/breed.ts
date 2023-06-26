import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CatBreed } from 'components/types/catBreed'
import breedService from 'services/breed.service'
import isOutDated from 'utils/isOutDated'

interface BreedState {
  entities: CatBreed[] | null
  isLoading: boolean
  error: string | null
  lastFetch: number | null
}

const initialState: BreedState = {
  entities: null,
  isLoading: true,
  error: null,
  lastFetch: null,
}

const breedSlice = createSlice({
  name: 'breed',
  initialState,
  reducers: {
    breedRequested: (state) => {
      state.isLoading = true
    },
    breedReceved: (state, action: PayloadAction<CatBreed[]>) => {
      state.entities = action.payload
      state.lastFetch = Date.now()
      state.isLoading = false
    },
    breedRequestFiled: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

const { reducer: breedReducer, actions } = breedSlice
const { breedRequested, breedReceved, breedRequestFiled } = actions

export const loadBreeds =
  () => async (dispatch: Dispatch, getState: () => { breed: BreedState }) => {
    const { lastFetch } = getState().breed
    if (isOutDated(lastFetch)) {
      dispatch(breedRequested())
      try {
        const { content } = await breedService.fetchAll()
        dispatch(breedReceved(content))
      } catch (error) {
        dispatch(breedRequestFiled((error as Error).message))
      }
    }
  }

export const getBreeds = () => (state: { breed: BreedState }) => {
  return state.breed.entities ? state.breed.entities : null
}
export default breedReducer
