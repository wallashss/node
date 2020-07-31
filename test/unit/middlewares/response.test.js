/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
chai.use(require('sinon-chai'))
const faker = require('faker')
const responseMiddleware = require('src/middlewares/response')

describe('Middlewares: Response', function () {
  beforeEach(function () {
    this.req = {}
    this.res = {
      locals: {
        id: faker.random.number(),
        description: faker.lorem.sentence()
      },
      send: sinon.spy()
    }
    this.nextStub = sinon.stub()
  })

  describe('when processing response with data', function () {
    it('doesn\'t continues the request pipeline', function () {
      responseMiddleware(null, this.res, this.nextStub)
      expect(this.nextStub).to.not.have.been.called
    })
    it('responds the request', function () {
      responseMiddleware(null, this.res, this.nextStub)
      expect(this.res.send).to.have.been.called
    })
  })

  describe('when processing response without data', function () {
    it('doesn\'t continues the request pipeline', function () {
      this.res.locals = {}
      responseMiddleware(null, this.res, this.nextStub)
      expect(this.nextStub).to.not.have.been.called
    })
    it('responds the request', function () {
      responseMiddleware(null, this.res, this.nextStub)
      expect(this.res.send).to.have.been.called
    })
  })
})
