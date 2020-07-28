const logger = require('src/logger')

module.exports = (req, res, next) => {
  logger.info('Request', { req: { path: req.path, body: req.body } })

  next()
}
