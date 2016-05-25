var budo = require('budo')
var babelify = require('babelify')

// TODO can add development middleware to mock prod environment

budo('./src/development/init.js', {
  live: true,
  stream: process.stdout,
  port: 8000,
  open: true,
  browserify: {
    transform: babelify
  }
})
