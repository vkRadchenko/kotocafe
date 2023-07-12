const Breed = require('../models/Breed')
const Quality = require('../models/Quality')

const breedMock = require('../mock/breed.json')
const qualityMock = require('../mock/quality.json')

module.exports = async (params) => {
  const breeds = await Breed.find()
  if (breeds.length !== breedMock.length) {
    createInitialEntity(Breed, breedMock)
  }

  const qualities = await Quality.find()
  if (qualities.length !== qualityMock.length) {
    createInitialEntity(Quality, qualityMock)
  }
}

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id
        const newItem = new Model(item)
        await newItem.save()
        return newItem
      } catch (error) {
        return error
      }
    })
  )
}
