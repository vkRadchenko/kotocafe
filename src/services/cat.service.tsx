import httpService from './http.servise'

const catEndPoint = 'cat/'

const catService = {
  get: async () => {
    const { data }: any = await httpService.get(catEndPoint)
    return data
  },
  createCat: async (payload: any) => {
    const { data } = await httpService.put(catEndPoint + payload._id, payload)
    return data
  },
}

export default catService
