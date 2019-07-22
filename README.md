# Mongo Benchmark for authBroker

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) [![Build Status](https://travis-ci.org/authbroker/mongo-benchmark.svg)](https://travis-ci.com/authbroker/mongo-benchmark)

Test plan and demo maker for authBroker and Paraffin IoT Platform

``` js

var benchmark = require('@authbroker/mongo-benchmark')

var opts = {
    type: 'parse',
    db: { //this is used for mongo type
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
demo.insertValidData(function () {
    demo.readData({ clientId: validData[1].clientId, realm: validData[1].realm }, function (callback) {
        console.log('clientID -> ' + validData[1].clientId + ' is searching in db:')
        console.log(callback)
    })
})

```

## Authors / Contributors

* [Hadi Mahdavi](https://twitter.com/kamerdack)

## Copyright

MIT - Copyright (c) 2019 ioKloud
