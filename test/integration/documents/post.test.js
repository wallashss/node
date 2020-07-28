const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect

const server = require('src/server')

describe('Create document', () => {
  it('returns ok', done => {
    chai.request(server)
      .post('/documents/1')
      .end((err, res) => {
        expect(err).to.be.equal(null)
        expect(res).to.have.status(200)
        done()
      })
  })
})
