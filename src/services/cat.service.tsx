import httpService from './http.servise'

const catEndPoint = 'cat/'

const catService = {
  get: async () => {
    const { data }: any = await httpService.get(catEndPoint)
    return data
  },
}

export default catService
