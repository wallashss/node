module.exports = (req, res, next) => {
  res.locals.health = 'Server is healthy'
  next(null, req, res)
}
