const chai = require('chai')
const expect = chai.expect
const server = require('src/server')

describe('Server', function () {
  it('enables JSON parser middleware', function () {
    const jsonParser = getMiddleware('jsonParser')
    expect(jsonParser).to.be.an('object')
    expect(jsonParser.handle.name).to.be.equal('jsonParser')
  })
  it('enables URL encoder parser middleware', function () {
    const urlencodedParser = getMiddleware('urlencodedParser')
    expect(urlencodedParser).to.be.an('object')
    expect(urlencodedParser.handle.name).to.be.equal('urlencodedParser')
  })
  it('enables security middleware', function () {
    const security = getMiddleware('security')
    expect(security).to.be.an('object')
    expect(security.handle.name).to.be.equal('security')
  })
  it('enables router middleware', function () {
    const router = getMiddleware('router')
    expect(router).to.be.an('object')
    expect(router.handle.name).to.be.equal('router')
  })
  it('enables request middleware', function () {
    const request = getMiddleware('request')
    expect(request).to.be.an('object')
    expect(request.handle.name).to.be.equal('request')
  })
  it('enables error middleware', function () {
    const error = getMiddleware('error')
    expect(error).to.be.an('object')
    expect(error.handle.name).to.be.equal('error')
  })
  it('enables response middleware', function () {
    const response = getMiddleware('response')
    expect(response).to.be.an('object')
    expect(response.handle.name).to.be.equal('response')
  })
})

function getMiddleware (name) {
  return server._router.stack.find(layer => layer.name === name)
}
