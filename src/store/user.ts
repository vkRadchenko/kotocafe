import { createAction, createSlice } from '@reduxjs/toolkit'
import { rootNavigate } from 'customRouter'
import authService from 'services/auth.service'
import localStorageService from 'services/localStorage.service'
import userService from 'services/user.service'
import generetAuthError from 'utils/generateAuthError'

interface UserState {
  entities: null | []
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
    userReceved: (state, action: any) => {
      state.entities = action.payload
      state.isLoading = false
    },
    userRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    authRequesteSuccess: (state, action) => {
      state.auth = action.payload
      state.isLoggedIn = true
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload
    },
    userCreated: (state, action) => {
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
  userCreated,
  userLogOut,
} = actions

const authRequested = createAction('user/authRequested')
const userCreateRequested = createAction('user/userCreateRequested')
const createUserFailed = createAction('user/createUserFailed')

export const logIn = (payload: any) => async (dispatch: any) => {
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

export const logOut = () => (dispatch: any) => {
  localStorageService.removeAuthData()
  dispatch(userLogOut())
  rootNavigate('/cats')
}

export const signUp =
  ({ email, password, ...rest }: { [key: string]: string }) =>
  async (dispatch: any) => {
    dispatch(authRequested())
    try {
      const data: any = await authService.register({ email, password })
      localStorageService.setTokens(data)
      dispatch(authRequesteSuccess({ userId: data.localId }))
      dispatch(
        createUser({
          _id: data.localId,
          email,
          image: `https://api.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
          ...rest,
        })
      )
    } catch (error) {
      dispatch(authRequestFailed((error as Error).message))
    }

    function createUser(payload: any) {
      return async function (dispatch: any) {
        dispatch(userCreateRequested())
        try {
          const { content }: any = await userService.create(payload)
          dispatch(userCreated(content))
          rootNavigate('/cats')
        } catch (error: any) {
          dispatch(createUserFailed(error.message))
        }
      }
    }
  }
export const getUserData = () => async (dispatch: any) => {
  dispatch(userRequested())
  try {
    const { content } = await userService.getCurrentUser()
    dispatch(userReceved(content))
  } catch (error: any) {
    dispatch(userRequestFiled(error.message))
  }
}
export const getUser = () => (state: any) => {
  return state.user.entities ? state.user.entities : null
}
export const getIsLoggedIn = () => (state: any) => state.user.isLoggedIn
export const getCurrentUserId = () => (state: any) => state.user.auth.userId
export const getAuthErrors = () => (state: any) => state.user.error
export default userReducer
