const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = express.Router({ mergeParams: true })

router.patch('/:userId', async (req, res) => {
  try {
    const { userId } = req.params()

    if (userId) {
    }
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const list = await User.find()

    res.status(200).send(list)
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

module.exports = router
