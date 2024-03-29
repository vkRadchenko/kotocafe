const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/auth', require('./auth.routes'))
router.use('/breeds', require('./breed.routes'))
router.use('/qualities', require('./quality.routes'))
router.use('/user', require('./user.routes'))
router.use('/cats', require('./cat.routes'))

module.exports = router
