var url = require('url')
var simulateNetworkDelay = require('../util/simulateNetworkDelay')
var db = require('../db')

function todoList (req, res, next) {
  const pathname = url.parse(req.url).pathname

  if (pathname === '/todo/list') {
    simulateNetworkDelay(() => {
      res.statusCode = 200
      res.end(JSON.stringify(db.todoList()))
    })
  } else {
    next()
  }
}

module.exports = todoList
