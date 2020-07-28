const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect

const server = require('src/server')

describe('Get health', () => {
  it('returns server health status', done => {
    chai.request(server)
      .get('/health')
      .end((err, res) => {
        expect(err).to.be.equal(null)
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('object')
        done()
      })
  })
})
