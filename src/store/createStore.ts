import { combineReducers, configureStore } from '@reduxjs/toolkit'
import qualitiesReducer from './qualities'
import catsReducer from './cats'
import userReducer from './user'
import breedReducer from './breed'

const rootReducer = combineReducers({
  qualities: qualitiesReducer,
  breed: breedReducer,
  cats: catsReducer,
  user: userReducer,
})

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  })
}
