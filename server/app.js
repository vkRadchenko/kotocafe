const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const path = require('path')
const initDataBase = require('./startUp/initDataBase')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

const PORT = config.get('port') ?? 8080

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client')))
  const indexPath = path.join(__dirname, 'client', 'index.html')
  app.get('*', (reg, res) => {
    res.sendFile(indexPath)
  })
}

async function start() {
  try {
    mongoose.connection.once('open', () => {
      initDataBase()
    })
    await mongoose.connect(config.get('mongoUri'))

    app.listen(PORT, () => {
      console.log(chalk.green(`Server has been starter on port ${PORT}`))
    })
  } catch (error) {
    console.log(chalk.red(error.message))
    process.exit(1)
  }
}

start()
