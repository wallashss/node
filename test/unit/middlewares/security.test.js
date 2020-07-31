const chai = require('chai')
const expect = chai.expect
const securityMiddleware = require('src/middlewares/security')

describe('Middlewares: Security', function () {
  describe('when processing a request', function () {
    it('sets Helmet secure HTTP response headers', function () {
      expect(securityMiddleware().name).to.be.equal('helmet')
    })
  })
})
