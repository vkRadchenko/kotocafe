import httpService from './http.servise'

const qualitiesEndPoint = 'qualities/'

const qualitiesService = {
  fetchAll: async () => {
    const { data } = await httpService.get(qualitiesEndPoint)
    return data
  },
}

export default qualitiesService
