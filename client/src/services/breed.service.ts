import httpService from './http.servise'

const breedEndPoint = 'breeds/'

const breedService = {
  fetchAll: async () => {
    const { data } = await httpService.get(breedEndPoint)
    return data
  },
}

export default breedService
