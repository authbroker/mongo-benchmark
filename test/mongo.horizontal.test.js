var assert = require('assert')
var test = require('../index')


describe('Benchmark Verification', function () {
    var validData
    var runTest
    var opts


    describe('Horizontal architecture', function () {

        before(function (done) {
            opts = {
                type: 'mongo',
                db: {
                    url: 'mongodb://localhost:27017/paraffin',
                    dbName: 'paraffin',
                    collectionName: 'authBroker',
                    methodology: 'horizontal'
                },
                salt: {
                    iterations: 10,
                    hashBytes: 64,
                    digest: 'sha512',
                    salt: 'salt'
                }
            }

            runTest = new test(opts)
            done()
        })

        it('should return client setting when call getValidData function', function () {
            validData = runTest.validData()
            var actual = runTest.getValidData(validData[1].clientId)
            assert(validData[1].clientId === actual.clientId, 'Valid Data is valid!')
        })


        it('Should return true if insert valid data', function () {
            runTest.insertValidData(function (err, res) {
                //console.log(result)
                runTest.readData({ clientId: validData[1].clientId, realm: validData[1].realm }, function (err, res) {
                    //console.log(callback)
                    assert(validData[1].clientId === res.clientId, 'Read data is invalid!')
                })
            })
        })

        /*
        it('Should return true if drop collection is done', function () {
          runTest.drop(opts.db.collectionName, function (callback) {
            assert(callback, 'true is expected.')
          })
        })
        */

    })


})
