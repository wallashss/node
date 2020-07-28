const chai = require('chai')
const expect = chai.expect
const httpStatus = require('http-status')
const InternalServerError = require('src/errors/internal-server')
const localization = require('src/localization')

describe('Errors: InternalServerError Suite', function () {
  beforeEach(function () {
    this.error = new InternalServerError()
  })

  it('extends from Error', function () {
    expect(this.error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', function () {
    expect(this.error.name).to.be.equal('InternalServerError')
  })

  it('sets error message', function () {
    expect(this.error.message).to.be.equal(localization.errors.internalServer())
  })

  it('sets error status code to not found', function () {
    expect(this.error.statusCode).to.be.equal(httpStatus.INTERNAL_SERVER_ERROR)
  })
})
