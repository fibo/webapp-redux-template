const jsonwebtoken = require('jsonwebtoken')
const url = require('url')
const port = require('../port')

const email = 'jsmith@example.org'
const jwtSecret = process.env.JWT_SECRET
const token = jsonwebtoken.sign({ email }, jwtSecret)
const baseURL = `http://localhost:${port}`

function api (req, res, next) {
  if (url.parse(req.url).pathname === '/api') {
    res.statusCode = 200
    res.end(JSON.stringify({ token, baseURL }))
  } else {
    next()
  }
}

module.exports = api
