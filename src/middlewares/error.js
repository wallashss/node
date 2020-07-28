const httpStatus = require('http-status')
const logger = require('src/logger')

module.exports = (err, req, res, next) => {
  const status = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
  res.status(status).send(err)

  logger.error(err.message, { res: { status } })
}
