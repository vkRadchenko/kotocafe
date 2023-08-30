import httpService from './http.servise'

const catEndPoint = 'cats/'

const catService = {
  get: async () => {
    const { data }: any = await httpService.get(catEndPoint)
    return data
  },
  createCat: async (payload: any) => {
    const { data } = await httpService.post(catEndPoint, payload)
    return data
  },
}

export default catService
