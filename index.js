var debug = require('debug')
var pbkdf2 = require('./lib/crypto')
var mongo = require('./lib/mongo')
var validData = require('./lib/validDocs')

function mongoBenchmark(opts) {
    this.opts = opts
    this.mongo = new mongo(opts.db)
}

mongoBenchmark.prototype.insertRandomData = function (recordsNo) {
    //
}



mongoBenchmark.prototype.drop = function (collectionName, cb) {
    this.mongo.dropCollection(collectionName, function (callback) {
        cb(callback)
    })
}


mongoBenchmark.prototype.readData = function (clientId, cb) {
    this.mongo.reading({clientId: clientId}, function (err, callback) {
        cb(callback)
    })
}

mongoBenchmark.prototype.insertValidData = function (callback) {
    var beforeHash = this.validData()
    var afterHash = beforeHash
    for (i = 0; i < beforeHash.length; i++)
        for (j = 0; j < beforeHash[i].adapters.length; j++)
            if (afterHash[i].adapters[j].secret.type === 'pbkdf2')
                afterHash[i].adapters[j].secret.pwdhash = pbkdf2(beforeHash[i].adapters[j].secret.pwdhash, this.opts.salt)

    this.mongo.saving(afterHash, function(err, res) {
        callback(res)
    })
}

mongoBenchmark.prototype.validData = function () {
    return validData()
}

mongoBenchmark.prototype.getValidData = function (clientId) {
    var data = validData()
    for (i = 0; i < data.length; i++)
        if (data[i].clientId === clientId)
            return data[i]
}

module.exports = mongoBenchmark