/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
chai.use(require('sinon-chai'))
const deleteRoute = require('src/routes/data/delete')

describe('Routes: DELETE data/{:id}', function () {
  beforeEach(function () {
    this.req = {}
    this.res = {}
    this.nextStub = sinon.stub()
  })

  describe('when the request is successful', function () {
    beforeEach(function () {
      return deleteRoute(this.req, this.res, this.nextStub)
    })

    it('sets res.locals to expected response', function () {
      expect(this.res.locals).to.be.deep.equal(undefined)
    })

    it('continues the request pipeline', function () {
      expect(this.nextStub).to.have.been.called
    })
  })
})
