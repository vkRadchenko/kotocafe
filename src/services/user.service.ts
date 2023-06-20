import httpService from './http.servise'
import localStorageService from './localStorage.service'

const userEndPoint = 'user/'

const userService = {
  create: async (payload: any) => {
    const { data } = await httpService.put(userEndPoint + payload._id, payload)
    return data
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      userEndPoint + localStorageService.getUserId()
    )
    return data
  },
}

export default userService
