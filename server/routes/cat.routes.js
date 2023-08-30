const express = require('express')
const router = express.Router({ mergeParams: true })
const Cat = require('../models/Cat')
const auth = require('../middleware/auth.middleware')

router.get('/', async (req, res) => {
  try {
    const list = await Cat.find()
    res.status(200).send(list)
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

router.post('/', auth, async (req, res) => {
  try {
    const createCat = await Cat.create({
      ...req.body,
    })
    res.status(201).send(createCat)
  } catch (error) {
    console.log('route', error)
    res.status(401).json({ message: 'Unauthorized' })
  }
})

module.exports = router
