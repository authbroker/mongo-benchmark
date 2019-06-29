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
      validData = runTest.validData()
    })

    it('should return client setting when call getValidData function', function () {
      assert.equal(validData[1], runTest.getValidData(validData[1].clientId))
      done()
    })
  })
})
