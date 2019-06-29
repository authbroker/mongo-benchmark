var assert = require('assert')
var test = require('../index')

var opts = {
  db: {
    url: 'mongodb://localhost:27017/paraffin',
    collectionName: 'authBroker',
    methodology: 'vertical'
  },
  salt: {
    iterations: 10,
    hashBytes: 64,
    digest: 'sha512',
    salt: 'salt'
  }
}

describe('Benchmark Verification', function () {
  var runTest = new test(opts)
  var validData

  describe('validData function', function () {

    beforeEach(function (done) {
      runTest = new test(opts)
      validData = runTest.validData
    })

    it('should return clientID when call validData function', function () {
      assert.equal('0050bdee-dd8b-43a3-8602-a10f1d0e2659', validData[0].clientId)
    })
  })
})
