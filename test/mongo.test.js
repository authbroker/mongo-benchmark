var test = require('../index')

var opts = {
    db: {
        url: 'mongodb://localhost:27017/paraffin',
        collectionName: 'authBroker',
        methodology: 'vertical'
    }
}

console.log('Test is starting...')

var runTest = new test(opts)
runTest.insertValidData()
