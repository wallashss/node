module.exports = (req, res, next) => {
  res.locals = []
  next(null, req, res)
}
