/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
chai.use(require('sinon-chai'))
const listRoute = require('src/routes/data/list')

describe('Routes: GET data', function () {
  beforeEach(function () {
    this.req = {}
    this.res = {}
    this.nextStub = sinon.stub()
  })

  describe('when the request is successful', function () {
    beforeEach(function () {
      return listRoute(this.req, this.res, this.nextStub)
    })

    it('sets res.locals to expected response', function () {
      expect(this.res.locals).to.be.deep.equal([])
    })

    it('continue the request pipeline', function () {
      expect(this.nextStub).to.have.been.called
    })
  })
})
