# Mongo Benchmark for authBroker

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) [![Build Status](https://travis-ci.org/authbroker/mongo-benchmark.svg)](https://travis-ci.com/authbroker/mongo-benchmark)

Test plan and demo maker for authBroker and Paraffin IoT Platform

``` js

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
console.log(demo.validData())

// save valid demo data to db
demo.insertValidData()

```


## Authors / Contributors

* [Hadi Mahdavi](https://twitter.com/kamerdack)


## Copyright

MIT - Copyright (c) 2019 ioKloud
