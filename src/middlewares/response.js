const httpStatus = require('http-status')

module.exports = (req, res, next) => {
  const body = res.locals.constructor === Array || Object.keys(res.locals).length > 0
    ? res.locals
    : undefined

  res.status(httpStatus.OK).send(body)
}
