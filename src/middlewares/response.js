const httpStatus = require('http-status')
const logger = require('src/logger')

module.exports = (req, res, next) => {
  const body = res.locals.constructor === Array || Object.keys(res.locals).length > 0
    ? res.locals
    : undefined

  res.status(httpStatus.OK).send(body)

  logger.info('Response', { res: { status: res.statusCode, body } })
}
