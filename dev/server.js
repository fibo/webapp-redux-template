const express = require('express')
const open = require('open')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const basePath = require('./basePath')
const port = require('./port')

const url = `http://localhost:${port}${basePath}`

const config = require('../webpack.config')
const compiler = webpack(config)

const app = express()

const api = require('./middleware/api')
app.use(api)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/irndex.html'))
})

const sendHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
}

app.get('/todo/list', (req, res) => {
  res.json([
    {
      content: 'Remove GET /todo/list route in dev/server.js'
    }
  ])
})

app.get(basePath, sendHomePage)
   .get(basePath + '/*', sendHomePage)

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
    open(url, 'Google Chrome')
  }
})
