import {
  AnyAction,
  Dispatch,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit'
import qualitiesService from 'services/qualities.service'

export interface QualityProps {
  _id: string
  color: string
  name: string
}

interface QualitiesState {
  entities: QualityProps[] | null
  isLoading: boolean
  error: string | null
}

const initialState: QualitiesState = {
  entities: null,
  isLoading: true,
  error: null,
}

const qualitiesSlice = createSlice({
  name: 'qualities',
  initialState,
  reducers: {
    qualitiesRequested: (state) => {
      state.isLoading = true
    },
    qualitiesReceved: (state, action: PayloadAction<QualityProps[]>) => {
      state.entities = action.payload
      state.isLoading = false
    },
    qualitiesRequestFiled: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

const { reducer: qualitiesReducer, actions } = qualitiesSlice
const { qualitiesRequested, qualitiesReceved, qualitiesRequestFiled } = actions

export const loadQualitiesList =
  () => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(qualitiesRequested())
    try {
      const { content } = await qualitiesService.fetchAll()
      dispatch(qualitiesReceved(content))
    } catch (error) {
      dispatch(qualitiesRequestFiled((error as Error).message))
    }
  }

export const getQualities = () => (state: { qualities: QualitiesState }) =>
  state.qualities.entities
export const qualitiesLoadingStatus =
  () => (state: { qualities: QualitiesState }) =>
    state.qualities.isLoading

export const getQualitiesById =
  (qualitiesIds: string[]) => (state: { qualities: QualitiesState }) => {
    if (state.qualities.entities) {
      const qualitiesArray: QualityProps[] = []
      for (const qualId of qualitiesIds) {
        for (const quality of state.qualities.entities) {
          if (quality._id === qualId) {
            qualitiesArray.push(quality)
            break
          }
        }
      }
      return qualitiesArray
    }
    return []
  }
export default qualitiesReducer