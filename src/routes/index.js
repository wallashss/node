const express = require('express')
const routes = require('requireindex')(__dirname)

const router = express.Router()

Object.keys(routes).forEach(route => router.use(routes[route]))

module.exports = router
