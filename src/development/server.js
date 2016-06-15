var budo = require('budo')
var babelify = require('babelify')
var api = require('./middleware/api')
var port = require('./port')

budo('./src/development/init.js', {
  live: true,
  stream: process.stdout,
  port,
  open: true,
  browserify: {
    transform: babelify
  },
  // Add development middleware to mock production environment
  middleware: [
    api
  ]
})
