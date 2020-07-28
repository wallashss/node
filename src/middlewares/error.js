const httpStatus = require('http-status')

module.exports = (err, req, res, next) => {
  const status = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
  res.status(status).send(err)
}
