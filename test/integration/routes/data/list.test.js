const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect

const server = require('src/server')

describe('Get documents', () => {
  it('returns all documents', done => {
    chai.request(server)
      .get('/documents')
      .end((err, res) => {
        expect(err).to.be.equal(null)
        expect(res).to.have.status(200)
        done()
      })
  })
})
