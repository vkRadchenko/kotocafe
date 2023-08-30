const express = require('express')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const tokenService = require('../services/token.service')
const router = express.Router({ mergeParams: true })

// api/auth/
// get data from req(emaol, password)

router.post('/signUp', [
  check('email', 'Некорректный email').isEmail(),
  check('password', 'Минимальная длина пароля 8 символов').isLength({ min: 8 }),

  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400,
            //errors: errors.array(),
          },
        })
      }

      const { email, password } = req.body

      const existingUser = await User.findOne({ email })

      if (existingUser) {
        return res.status(400).json({
          error: {
            message: 'EMAIl_EXISTS',
            code: 400,
          },
        })
      }

      const hashedPassword = await bcrypt.hash(password, 12)

      const newUser = await User.create({
        image: `https://api.dicebear.com/api/avataaars/${(Math.random() + 1)
          .toString(36)
          .substring(7)}.svg`,
        ...req.body,
        password: hashedPassword,
      })

      const tokens = tokenService.generate({
        _id: newUser._id,
      })
      await tokenService.save(newUser._id, tokens.refreshToken)

      res.status(201).send({ ...tokens, userId: newUser._id })
    } catch (error) {
      res.status(500).json({
        message: 'На сервере произошла ошибка. Попробуйте позже',
      })
    }
  },
])

router.post('/signInWithPassword', [
  check('email', 'Некорректный email').isEmail(),
  check('password', 'Пароль не может быть пустым').exists(),

  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400,
            //errors: errors.array(),
          },
        })
      }

      const { email, password } = req.body

      const existingUser = await User.findOne({ email })

      if (!existingUser) {
        return res.status(400).send({
          error: {
            message: 'EMAIL_NOT_FOUND',
            code: 400,
          },
        })
      }

      const isPasswordEqual = await bcrypt.compare(
        password,
        existingUser.password
      )
      if (!isPasswordEqual) {
        return res.status(400).send({
          error: {
            message: 'INVALID_PASSWORD',
            code: 400,
          },
        })
      }

      const tokens = tokenService.generate({ _id: existingUser._id })
      await tokenService.save(existingUser._id, tokens.refreshToken)

      res.status(200).send({ ...tokens, userId: existingUser._id })
    } catch (error) {
      res.status(500).json({
        message: 'На сервере произошла ошибка. Попробуйте позже',
      })
    }
  },
])
router.post('/token', async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body
    const data = tokenService.validateRefreshToken(refreshToken)
    const dbToken = await tokenService.findToken(refreshToken)

    if (!data || !dbToken || data._id !== dbToken?.user?.toString()) {
      return res.status(401).json({
        message: 'Unautharized',
      })
    }

    const tokens = await tokenService.generate({
      _id: data._id,
    })
    await tokenService.save(data._id, tokens.refreshToken)

    res.status(200).send({ ...tokens, userId: data._id })
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

module.exports = router
