import axios from 'axios'
import configFile from '../config.json'
import { toast } from 'react-toastify'
import localStorageService from './localStorage.service'
import authService from './auth.service'

const http = axios.create({
  baseURL: configFile.apiEndPoint,
})

function transformData(data: any) {
  return data && !data._id
    ? Object.keys(data).map((key) => ({
        ...data[key],
      }))
    : data
}

http.interceptors.request.use(
  async function (config: any) {
    const expiresDate = localStorageService.getTokenExpiresDate()
    const refreshToken = localStorageService.getRefreshToken()
    const isExpired = refreshToken && Number(expiresDate) < Date.now()

    if (configFile.isFireBase) {
      const containSlash = /\/$/gi.test(config.url)
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + '.json'

      if (isExpired) {
        const data = await authService.refresh()

        localStorageService.setTokens({
          refreshToken: data.refresh_token,
          accsessToken: data.id_token,
          expiresIn: data.expires_in,
          userId: data.user_id,
        })
      }
      const accessToken = localStorageService.getAccessToken()
      if (accessToken) {
        config.params = { ...config.params, auth: accessToken }
      }
    } else {
      if (refreshToken && Number(expiresDate) < Date.now()) {
        const data = await authService.refresh()
        localStorageService.setTokens(data)
      }
      const accessToken = localStorageService.getAccessToken()

      if (accessToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
        }
      }
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (res) => {
    if (configFile.isFireBase) {
      res.data = { content: transformData(res.data) }
    }
    res.data = { content: res.data }

    return res
  },
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500

    if (!expectedErrors) {
      toast.error('Unexpected error')
    }
    return Promise.reject(error)
  }
)

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
}
export default httpService
