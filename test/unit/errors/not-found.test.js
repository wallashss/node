const chai = require('chai')
const expect = chai.expect
const httpStatus = require('http-status')
const NotFoundError = require('src/errors/not-found')
const localization = require('src/localization')

describe('Errors: Not Found', function () {
  beforeEach(function () {
    this.error = new NotFoundError()
  })

  it('extends from Error', function () {
    expect(this.error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', function () {
    expect(this.error.name).to.be.equal('NotFoundError')
  })

  it('sets error message', function () {
    expect(this.error.message).to.be.equal(localization.errors.notFound())
  })

  it('sets error status code to not found', function () {
    expect(this.error.statusCode).to.be.equal(httpStatus.NOT_FOUND)
  })
})
