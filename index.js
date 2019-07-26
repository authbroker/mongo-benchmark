var debug = require('debug')
var pbkdf2 = require('./lib/crypto')
var validDoc = require('./lib/validDocs')

function mongoBenchmark(opts) {
    this.opts = opts
    if (opts.type === 'parse')
        var mongo = require('./lib/parse')
    else
        var mongo = require('./lib/mongo')

    this.mongo = new mongo(opts)

}

mongoBenchmark.prototype.insertRandomData = function (recordsNo) {
    //
}



mongoBenchmark.prototype.drop = function (collectionName, cb) {
    this.mongo.dropCollection(collectionName, function (callback) {
        cb(callback)
    })
}


mongoBenchmark.prototype.readData = function (client, cb) {
    this.mongo.reading({ realm: client.realm, clientId: client.clientId }, function (err, res) {
        cb(err, res)
    })
}

mongoBenchmark.prototype.insertValidData = function (callback) {
    var beforeHash = this.validData()
    var afterHash = beforeHash
    for (i = 0; i < beforeHash.length; i++) {
        for (j = 0; j < beforeHash[i].adapters.length; j++)
            if (afterHash[i].adapters[j].secret.type === 'pbkdf2')
                afterHash[i].adapters[j].secret.pwdhash = pbkdf2(beforeHash[i].adapters[j].secret.pwdhash, this.opts.salt)
        //console.log(afterHash[i])
        this.mongo.saving(afterHash[i], function (err, res) {
            callback(err, res)
        })
    }
}

mongoBenchmark.prototype.validData = function () {
    return validDoc()
}

mongoBenchmark.prototype.getValidData = function (clientId) {
    var data = validDoc()
    for (i = 0; i < data.length; i++)
        if (data[i].clientId === clientId)
            return data[i]
}

module.exports = mongoBenchmark