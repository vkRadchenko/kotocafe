const jwt = require('jsonwebtoken')
const config = require('config')
const Token = require('../models/Token')

class TokenService {
  generate(payload) {
    const accsessToken = jwt.sign(payload, config.get('accsessSecret'), {
      expiresIn: '1h',
    })

    const refreshToken = jwt.sign(payload, config.get('refreshSecret'))

    return { accsessToken, refreshToken, expiresIn: 3600 }
  }
  async save(user, refreshToken) {
    const data = await Token.findOne({ user })
    if (data) {
      data.refreshToken = refreshToken
      return data.save()
    }
    const token = await Token.create({ user, refreshToken })
    return token
  }

  validateRefreshToken(refreshToken) {
    try {
      return jwt.verify(refreshToken, config.get('refreshSecret'))
    } catch (error) {
      return null
    }
  }
  validateAccsessToken(accsessToken) {
    try {
      return jwt.verify(accsessToken, config.get('accsessSecret'))
    } catch (error) {
      return null
    }
  }

  async findToken(refreshToken) {
    try {
      return await Token.findOne({ refreshToken })
    } catch (error) {
      return null
    }
  }
}

module.exports = new TokenService()
