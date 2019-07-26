var benchmark = require('./index')

var opts = {
    type: 'parse',
    db: {
        url: 'mongodb://localhost:27017/paraffin',
        collectionName: 'authBroker',
        methodology: 'vertical'
    },
    parse: {
        serverURL: 'http://localhost:5000/api',
        appId: 'APP_ID',
        javascriptKey: 'JAVASCRIPT_KEY',
        masterKey: 'MASTER_KEY',
        methodology: 'horizontal',
    },
    salt: {
        iterations: 10,
        hashBytes: 64,
        digest: 'sha512',
        salt: 'salt'
    }

}
var demo = new benchmark(opts)

// print valid demo data list
console.log('print valid demo data list:')
var validData = demo.validData()
console.log(validData)

// save valid demo data to db
demo.insertValidData(function (err, res) {
    if (err) {
        console.log(err)
        throw err
    }
    console.log(res)
    demo.readData({ clientId: validData[1].clientId, realm: validData[1].realm }, function (err, res) {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('+---+')
        console.log(res)
    })
})