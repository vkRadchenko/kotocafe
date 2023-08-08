import {
  AnyAction,
  Dispatch,
  PayloadAction,
  createAction,
  createSlice,
} from '@reduxjs/toolkit'
import { User } from 'components/types/User'
import { rootNavigate } from 'customRouter'
import authService from 'services/auth.service'
import localStorageService from 'services/localStorage.service'
import userService from 'services/user.service'
import generetAuthError from 'utils/generateAuthError'

interface UserState {
  entities: User | null
  isLoading: boolean
  error: string | null
  auth: any
  isLoggedIn: boolean
  dataLoaded: boolean
}

const initialState: UserState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      dataLoaded: false,
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: true,
    }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRequested: (state) => {
      state.isLoading = true
    },
    userReceved: (state, action: PayloadAction<User>) => {
      state.entities = action.payload
      state.isLoading = false
    },
    userRequestFiled: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    authRequesteSuccess: (state, action: PayloadAction<{ userId: string }>) => {
      state.auth = action.payload
      state.isLoggedIn = true
    },
    authRequestFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    userCreated: (state, action: PayloadAction<User>) => {
      state.entities = action.payload
    },
    userLogOut: (state) => {
      state.entities = null
      state.isLoggedIn = false
      state.auth = null
      state.dataLoaded = false
    },
    authRequested: (state) => {
      state.error = null
    },
  },
})
const { reducer: userReducer, actions } = userSlice
const {
  userRequested,
  userReceved,
  userRequestFiled,
  authRequesteSuccess,
  authRequestFailed,
  userLogOut,
} = actions

const authRequested = createAction('user/authRequested')

export const logIn =
  (payload: { email: string; password: string }) => async (dispatch: any) => {
    const { email, password } = payload
    dispatch(authRequested())
    try {
      const data = await authService.logIn({ email, password })
      dispatch(authRequesteSuccess({ userId: data.localId }))
      localStorageService.setTokens(data)
      rootNavigate('/cats')
    } catch (error: any) {
      const { code, message } = error.response.data.error
      if (code === 400) {
        const errorMessage = generetAuthError(message)
        dispatch(authRequestFailed(errorMessage))
      } else {
        dispatch(authRequestFailed(error.message))
      }
    }
  }

export const logOut = () => (dispatch: Dispatch<AnyAction>) => {
  localStorageService.removeAuthData()
  dispatch(userLogOut())
  rootNavigate('/cats')
}

export const signUp = (payload: any) => async (dispatch: any) => {
  dispatch(authRequested())
  try {
    const data: any = await authService.register(payload)
    localStorageService.setTokens(data)
    dispatch(authRequesteSuccess({ userId: data.userId }))
    rootNavigate('/cats')
  } catch (error) {
    dispatch(authRequestFailed((error as Error).message))
  }
}
export const getUserData = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(userRequested())
  try {
    const { content } = await userService.getCurrentUser()
    console.log(content)

    dispatch(userReceved(content))
  } catch (error: any) {
    dispatch(userRequestFiled(error.message))
  }
}
export const getUser = () => (state: { user: UserState }) => {
  return state.user.entities ? state.user.entities : null
}
export const getIsLoggedIn = () => (state: { user: UserState }) =>
  state.user.isLoggedIn
export const getCurrentUserId = () => (state: { user: UserState }) =>
  state.user.auth.userId
export const getAuthErrors = () => (state: { user: UserState }) =>
  state.user.error
export default userReducer
