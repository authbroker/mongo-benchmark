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

    before(function (done) {
      runTest = new test(opts)
      runTest.insertValidData()
      validData = runTest.validData()
      done()
    })


    it('should return client setting when call getValidData function', function (done) {

      var actual = runTest.getValidData(validData[1].clientId)
      assert(validData[1].clientId === actual.clientId, 'Valid Data is valid!')
      done()
    })

    it('should return client setting when call readData function', function () {
      new Promise(resolve => {
        var actual = runTest.readData(validData[1].clientId)
        resolve(assert(validData[1].clientId != actual.clientId, 'Read data is valid!'))
        done()
      })
    })
  })
})
