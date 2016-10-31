const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const port = require('./port')

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
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/todo/list', (req, res) => {
  res.json([
    {
      content: 'Remove GET /todo/list route in dev/server.js'
    }
  ])
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
