var benchmark = require('@authbroker/mongo-benchmark')

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
var demo = new benchmark(opts)

// print valid demo data list
console.log('print valid demo data list:')
var validData = demo.validData()
console.log(validData)

// save valid demo data to db
demo.insertValidData(function () {
    demo.readData({ clientId: validData[1].clientId, realm: validData[1].realm }, function (callback) {
        console.log('clientID -> ' + validData[1].clientId + ' is searching in db:')
        console.log(callback)
    })
})