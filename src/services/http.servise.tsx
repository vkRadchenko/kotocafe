import axios from 'axios'
import configFile from '../config.json'
import { toast } from 'react-toastify'

axios.defaults.baseURL = configFile.apiEndPoint

axios.interceptors.response.use(
  (res) => res,
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500

    if (!expectedErrors) {
      console.log(error)
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
