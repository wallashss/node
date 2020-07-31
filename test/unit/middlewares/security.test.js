const chai = require('chai')
const expect = chai.expect
const securityMiddleware = require('src/middlewares/security')

describe('Middlewares: Security', () => {
  describe('when processing a request', () => {
    it('sets Helmet secure HTTP response headers', () => {
      expect(securityMiddleware().name).to.be.equal('helmet')
    })
  })
})
