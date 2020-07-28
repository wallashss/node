const express = require('express')
const router = express.Router()
const methods = require('requireindex')(__dirname)

router.route('/health')
  .get(methods.get)

module.exports = router
