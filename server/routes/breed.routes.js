const express = require('express')
const router = express.Router({ mergeParams: true })
const Breed = require('../models/Breed')

router.get('/', async (req, res) => {
  try {
    const list = await Breed.find()
    res.status(200).send(list)
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

module.exports = router
