var assert = require('assert')
var test = require('../index')

var opts = {
  db: {
    url: 'mongodb://localhost:27017/paraffin',
    dbName: 'paraffin',
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
  var validData
  var runTest
  var insert = false

  describe('validData function', function () {

    before(function (done) {
      runTest = new test(opts)
      done()
    })



    it('Should return true if insert valid data', function () {
      runTest.insertValidData(function (callback) {
        assert(callback.result.ok, 'true is expected.')
      })
    })


    it('should return client setting when call getValidData function', function () {
      validData = runTest.validData()
      var actual = runTest.getValidData(validData[1].clientId)
      assert(validData[1].clientId === actual.clientId, 'Valid Data is valid!')
    })


    it('should return client setting when call readData function', function () {
      runTest.readData(validData[1].clientId, function (callback) {
        assert(callback && (validData[1].clientId === callback.clientId), 'Read data is invalid!')
      })
    })


    it('Should return true if drop collection is done', function () {
      runTest.drop(opts.db.collectionName, function (callback) {
        assert(callback, 'true is expected.')
      })
    })


  })
})
