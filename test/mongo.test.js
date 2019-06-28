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
console.log('Test is starting...')

var runTest = new test(opts)
runTest.insertValidData()
