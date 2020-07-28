const express = require('express')
const router = express.Router()
const methods = require('requireindex')(__dirname)

router.route('/documents')
  .get(methods.list)
  .post(methods.post)

router.route('/documents/:id')
  .get(methods.get)
  .put(methods.put)
  .delete(methods.delete)

module.exports = router
