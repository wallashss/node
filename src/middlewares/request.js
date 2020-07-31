const logger = require('src/logger')

function request (req, res, next) {
  logger.info('Request', { req: { path: req.path, body: req.body } })

  next()
}

module.exports = request
