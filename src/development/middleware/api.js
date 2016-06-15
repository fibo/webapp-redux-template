var jsonwebtoken = require('jsonwebtoken')
var url = require('url')
var port = require('../port')

var email = 'jsmith@example.org'
var jwtSecret = process.env.JWT_SECRET
var token = jsonwebtoken.sign({ email }, jwtSecret)
var baseUrl = `http://localhost:${port}`

function api (req, res, next) {
  if (url.parse(req.url).pathname === '/api') {
    res.statusCode = 200
    res.end(JSON.stringify({ token, baseUrl }))
  } else {
    next()
  }
}

module.exports = api
