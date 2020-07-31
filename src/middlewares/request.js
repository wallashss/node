const logger = require('src/logger')

function request (req, res, next) {
  logger.info('Request', {
    req: { path: req.path, method: req.method, body: req.body }
  })

  next()
}

module.exports = request
