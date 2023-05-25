import axios from 'axios'
import configFile from '../config.json'
import { toast } from 'react-toastify'

axios.defaults.baseURL = configFile.apiEndPoint

function transformData(data: any) {
  return data
    ? Object.keys(data).map((key) => ({
        ...data[key],
      }))
    : []
}

axios.interceptors.request.use(
  function (config: any) {
    if (configFile.isFireBase) {
      const containSlash = /\/$/gi.test(config.url)
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + '.json'
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res) => {
    res.data = { content: transformData(res.data) }
    console.log(res.data)

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
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
export default httpService
