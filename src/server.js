const express = require('express')

const logger = require('src/logger')
const security = require('src/middlewares/security')
const request = require('src/middlewares/request')
const response = require('src/middlewares/response')
const error = require('src/middlewares/error')
const routes = require('src/routes')

const server = express()

const port = process.env.PORT || 3000

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use(security)
server.use(request)
server.use(routes)
server.use(response)
server.use(error)

server.listen(port, logger.info('Server started', { pid: process.pid }))

module.exports = server
